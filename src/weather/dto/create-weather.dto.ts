export class CreateWeatherDto {
  readonly city: string;
  readonly weather: {
    readonly type: string;
    readonly description: string;
  };
  readonly temperature: {
    readonly actual: number;
    readonly feelsLike: number;
    readonly min: number;
    readonly max: number;
  };
}
