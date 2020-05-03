import { Schema } from 'mongoose';

export const WeatherSchema = new Schema({
  city: String,
  weather: [{
    type: String,
    description: String,
  }],
  temperature: {
    actual: Number,
    feelsLike: Number,
    min: Number,
    max: Number,
  },
  time: Date,
});
