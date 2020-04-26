import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  forCity(city: string): Observable<AxiosResponse<object>> {
    return this.httpService.get(`?q=${city}`);
  }
}
