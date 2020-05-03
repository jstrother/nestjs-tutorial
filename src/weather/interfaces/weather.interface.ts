export interface Weather {
  id?: string;
  city: string;
  weather: [{
    type: string;
    description: string;
  }];
  temperature: {
    actual: number;
    feelsLike: number;
    min: number;
    max: number;
  };
}
