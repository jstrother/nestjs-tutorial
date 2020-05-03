import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { Weather } from './interfaces/weather.interface';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':city')
  getWeather(@Param('city') city: string): object {
    return this.weatherService.forCity(city);
  }

  @Post()
  saveWeather(@Body() createWeatherDto: CreateWeatherDto): Promise<Weather> {
    return this.weatherService.createWeather(createWeatherDto);
  }
}
