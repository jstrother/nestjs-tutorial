import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  /** the name in `@Param()` needs to match the parameter name in the `@Get()` 
   * so in this case ":city" being in the `@Get()` means that req.params has
   * the shape of { city: string }. By using `@Params('city') we are essentially
   * using `req.params['city'], meaning we pull the correct property. To test
   * this, you can always use `@Param()` without the string, and see what
   * is put into the resulting object
   */ 
  getWeather(@Param('city') city: string): object {
    return this.weatherService.forCity(city);
  }
}
