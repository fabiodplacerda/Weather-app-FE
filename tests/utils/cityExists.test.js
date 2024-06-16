import { cityExists } from "../../src/components/utils/cityExists";
import testUsers from "../data/testUser";

describe("cityExists function", () => {
  const { users } = testUsers;
  const { favouriteCities } = users[0];

  it("should return true if city exists in the array", () => {
    // Arrange
    const testCity = "New York";
    const testCountry = "USA";
    // Act
    const result = cityExists(favouriteCities, testCity, testCountry);
    // Assert
    expect(result).toBeTruthy();
  });
  it("should return false if city doesn't exist in the array", () => {
    // Arrange
    const testCity = "London";
    const testCountry = "UK";
    // Act
    const result = cityExists(favouriteCities, testCity, testCountry);
    // Assert
    expect(result).toBeFalsy();
  });
});
