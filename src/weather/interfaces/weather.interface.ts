import { Document } from 'mongoose';

export interface Weather extends Document {
  id?: string;
  city: string;
  weather: [{
    type: string;
    description: string;
  }];
  temperature: {
    actual: string;
    feelsLike: string;
    min: string;
    max: string;
  };
}
