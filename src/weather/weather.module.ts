require('dotenv').config();
import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { WeatherSchema } from './schemas/weather.schema';

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: 'Weather', schema: WeatherSchema }])],
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
