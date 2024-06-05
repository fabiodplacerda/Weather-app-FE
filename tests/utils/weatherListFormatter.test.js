import testWeatherData from "../data/testWeatherData";
import weatherListFormatter from "../../src/components/utils/weatherListFormatter";

describe("Weather List Formatter tests", () => {
  it("should return an array with 5 elements only ", () => {
    // Arrange
    // Act
    const result = weatherListFormatter(testWeatherData);
    // Assert
    expect(result.length).toBe(5);
  });

  it("should return right data", () => {
    // Arrange
    const expected = [
      {
        date: "5th June 2024",
        dayOfWeek: "Wednesday",
        icon: "04d",
        temp: "16ºC",
        weather: "Broken clouds",
      },
      {
        date: "6th June 2024",
        dayOfWeek: "Thursday",
        icon: "04d",
        temp: "16ºC",
        weather: "Overcast clouds",
      },
      {
        date: "7th June 2024",
        dayOfWeek: "Friday",
        icon: "10d",
        temp: "17ºC",
        weather: "Light rain",
      },
      {
        date: "8th June 2024",
        dayOfWeek: "Saturday",
        icon: "04d",
        temp: "17ºC",
        weather: "Overcast clouds",
      },
      {
        date: "9th June 2024",
        dayOfWeek: "Sunday",
        icon: "10d",
        temp: "14ºC",
        weather: "Light rain",
      },
    ];
    // Act
    const result = weatherListFormatter(testWeatherData);
    // Assert
    expect(result).toEqual(expected);
  });
});
