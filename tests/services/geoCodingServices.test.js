import axios from "axios";

import { getCities } from "../../src/services/geocoding.service";
import testCities from "../data/testCities";

vi.mock("axios");

describe("Geo Code data services tests", () => {
  const mockedResolvedCitiesData = { data: testCities };
  it("should make the correct data call", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce(mockedResolvedCitiesData);
    // Act
    await getCities();
    // Assert
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/results");
  });

  it("should return the correct data", async () => {
    // Arrange
    axios.get.mockResolvedValueOnce(mockedResolvedCitiesData);
    // Act
    const result = await getCities();
    // Assert
    expect(result).toEqual(testCities);
  });

  it("should return an error message if request fails", async () => {
    // Arrange
    const error = { message: "Error" };
    axios.get.mockRejectedValueOnce(error);
    // Act
    const result = await getCities();
    // Assert
    expect(result).toBe(error);
  });
});
