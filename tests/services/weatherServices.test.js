import axios from "axios";
import { getWeather } from "../../src/services/weather.service";
import testWeatherData from "../data/testWeatherData";

vi.mock("axios");

describe("Weather services tests", () => {
  const mockedResolvedWeatherData = { data: testWeatherData };
  it.skip("should make the correct data call", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce(mockedResolvedWeatherData);
    const lat = 50;
    const lon = 50;
    const expected =
      "https://api.openweathermap.org/data/2.5/forecast?lat=50&lon=50&appid=d8846db496071496646009367dd8705f";
    // Act
    await getWeather(lat, lon);
    // Assert
    expect(axios.get).toHaveBeenCalledWith(expected);
  });
  it("should return the correct data", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce(mockedResolvedWeatherData);

    // Act
    const result = await getWeather();
    // Assert
    expect(result).toEqual(testWeatherData);
  });
  it("should return an error message if request fails", async () => {
    // Arrange
    const error = { message: "Error" };
    axios.get.mockRejectedValueOnce(error);
    // Act
    const result = await getWeather();
    // Assert
    expect(result).toBe(error);
  });
});
