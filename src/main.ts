require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('api key', process.env.OPEN_WEATHER_KEY);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
