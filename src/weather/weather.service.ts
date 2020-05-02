import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { catchError, map, scan } from 'rxjs/operators';
import { Model } from 'mongoose';
import { Weather } from './interfaces/weather.interface';

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

  forCity(city: string): Observable<AxiosResponse<object>> {
    return this.httpService
      .get(`${this.url}${city}${this.appid}`)
      .pipe(
        map(({ data }: AxiosResponse): AxiosResponse<object> => data),
        scan((data: AxiosResponse<object>): object => {
          return {
            city: data.name,
          };
        }),
        catchError((err) => {
          throw `error in weather service: ${err}`;
        }),
      );
  }

  async createWeather(weather: Weather): Promise<Weather> {
    return await this.weatherModel(weather).save();
  }
}
