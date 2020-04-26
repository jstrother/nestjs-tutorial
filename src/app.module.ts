require('dotenv').config();
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(process.env.DATABASE_URI), WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
