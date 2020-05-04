const toFahrenheit = (temp: number): number => Math.round(((temp - 273.15) * 9) / 5 + 32);

const toCelsius = (temp: number): number => Math.round(temp - 273.15);

export const convertKelvin = (temp) => {
  return `${toFahrenheit(temp)}F / ${toCelsius(temp)}C`;
}
