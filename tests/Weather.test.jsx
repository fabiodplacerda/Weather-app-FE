import { render, screen, waitFor } from "@testing-library/react";

import { Weather } from "../src/components/Weather";

import * as services from "../src/services/weather.service";

import { MemoryRouter } from "react-router-dom";
import testCities from "./data/testCities";

vi.mock("../src/services/weather.service");

describe("Weather component tests", () => {
  it("should render loading when the page first loads", async () => {
    // Arrange

    const city = testCities[0];
    // Act
    render(<Weather selectedCity={city} />, {
      wrapper: MemoryRouter,
    });
    const loadingText = screen.getByText(/Retrieving weather data/i);
    // Assert
    expect(loadingText).toBeInTheDocument();
  });

  it("should render weather cards only 4 times", async () => {
    // Arrange
    const result = services.getWeather.mockResolvedValueOnce(testCities);
    console.log(result);
    const city = testCities[0];
    // Act
    render(<Weather selectedCity={city} />, {
      wrapper: MemoryRouter,
    });
    // Assert
    await waitFor(
      () => {
        const weatherCards = screen.getAllByTestId("weather-card");
        expect(weatherCards.length).toBe(4);
      },
      { timeout: 5000 }
    );
  });
});
