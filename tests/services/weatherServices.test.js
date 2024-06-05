import axios from "axios";
import { getWeather } from "../../src/services/weather.service";
import testWeatherData from "../data/testWeatherData";

vi.mock("axios");

describe("Weather services tests", () => {
  const mockedResolvedWeatherData = { data: testWeatherData };
  it.skip("should make the correct data call", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce(mockedResolvedWeatherData);
    const expected = "http://localhost:3000/list";
    // Act
    await getWeather();
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
