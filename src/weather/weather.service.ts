import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  forCity(city: string): Observable<AxiosResponse<object>> {
    return this.httpService.get(`?q=${city}`).pipe(
      map(response => response.data),
      catchError(err => {
        throw `error in weather service: ${err}`;
      })
    );
  }
}
