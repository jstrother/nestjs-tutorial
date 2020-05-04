export class CreateWeatherDto {
  readonly city: string;
  readonly weather: [{
    readonly type: string;
    readonly description: string;
  }];
  readonly temperature: {
    readonly actual: string;
    readonly feelsLike: string;
    readonly min: string;
    readonly max: string;
  };
}
