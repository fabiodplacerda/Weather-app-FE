import testWeatherData from "../data/testWeatherData";
import weatherListFormatter from "../../src/components/utils/weatherListFormatter";

describe("Weather List Formatter tests", () => {
  it("should return an array with 5 elements only ", () => {
    // Arrange
    // Act
    const result = weatherListFormatter(testWeatherData.list);
    // Assert
    expect(result.length).toBe(5);
  });

  it("should return right data", () => {
    // Arrange
    const expected = [
      {
        date: "14th June 2024",
        dayOfWeek: "Friday",
        weather: "Light rain",
        icon: "10n",
        temp: "12ºC",
      },
      {
        date: "15th June 2024",
        dayOfWeek: "Saturday",
        weather: "Light rain",
        icon: "10d",
        temp: "16ºC",
      },
      {
        date: "16th June 2024",
        dayOfWeek: "Sunday",
        weather: "Light rain",
        icon: "10d",
        temp: "19ºC",
      },
      {
        date: "17th June 2024",
        dayOfWeek: "Monday",
        weather: "Broken clouds",
        icon: "04d",
        temp: "21ºC",
      },
      {
        date: "18th June 2024",
        dayOfWeek: "Tuesday",
        weather: "Light rain",
        icon: "10d",
        temp: "15ºC",
      },
    ];
    // Act
    const result = weatherListFormatter(testWeatherData.list);

    // Assert
    expect(result).toEqual(expected);
  });
});
