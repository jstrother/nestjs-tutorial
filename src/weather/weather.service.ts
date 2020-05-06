import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosResponse } from 'axios';
// import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Model } from 'mongoose';
import { Weather } from './interfaces/weather.interface';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { convertKelvin } from '../functions/convertKelvin';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
    @InjectModel('Weather') private readonly weatherModel: Model<Weather>,
  ) {}

  private key = this.configService.get<string>('OPEN_WEATHER_KEY');
  private url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private appid = `&appid=${this.key}`;

  forCity(city: string): object {
    return this.httpService
      .get(`${this.url}${city}${this.appid}`)
      .pipe(
        map(({ data }: AxiosResponse): object => {
          const cityWeather: CreateWeatherDto = {
            city: data.name,
            weather: data.weather.map((typeOfWeather) => {
              return {
                actual: typeOfWeather.main,
                description: typeOfWeather.description,
              };
            }),
            temperature: {
              actual: convertKelvin(data.main.temp),
              feelsLike: convertKelvin(data.main.feels_like),
              min: convertKelvin(data.main.temp_min),
              max: convertKelvin(data.main.temp_max),
            },
            time: new Date(data.dt * 1000).toLocaleString(),
          };
          
          this.weatherModel(cityWeather).save();

          return cityWeather;
        }),
        catchError((err) => {
          throw `error in weather service: ${err}`;
        }),
      );
  }
}
