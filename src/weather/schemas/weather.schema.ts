import { Schema } from 'mongoose';

export const WeatherSchema = new Schema({
  city: String,
  weather: [{
    actual: String,
    description: String,
  }],
  temperature: {
    actual: String,
    feelsLike: String,
    min: String,
    max: String,
  },
  time: Date,
});
