import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService, private configService: ConfigService) {}

  private key = this.configService.get<string>('OPEN_WEATHER_KEY')
  private url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private appid = `&appid=${this.key}`;

  forCity(city: string): Observable<AxiosResponse<object>> {
    return this.httpService.get(`${this.url}${city}${this.appid}`).pipe(
      map((axiosResponse: AxiosResponse): AxiosResponse<object> => axiosResponse.data),
      catchError((err) => {
        throw `error in weather service: ${err}`;
      }),
    );
  }
}
