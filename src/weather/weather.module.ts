require('dotenv').config();
import { Module, HttpModule } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.openweathermap.org/data/2.5/weather',
      params: {
        appid: process.env.OPEN_WEATHER_KEY,
      },
    }),
  ],
  providers: [WeatherService],
  controllers: [WeatherController],
})

export class WeatherModule {}
