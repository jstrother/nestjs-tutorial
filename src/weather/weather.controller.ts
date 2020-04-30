import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  // we are using q in the parameters to match the api usage
  getWeather(@Param('q') city: string): object {
    return this.weatherService.forCity(city);
  }
}
