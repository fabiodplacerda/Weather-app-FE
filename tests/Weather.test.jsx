import { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Weather } from "../src/components/Weather";
import { getWeather } from "../src/services/weather.service";

import testCities from "./data/testCities";
import testWeatherData from "./data/testWeatherData";

vi.mock("../src/services/weather.service");

describe("Weather component tests", () => {
  it("should render loading when the page first loads", async () => {
    // Arrange
    await act(
      async () => await getWeather.mockResolvedValueOnce(testWeatherData)
    );
    const city = testCities.results[0];

    // Act
    await act(async () => {
      render(<Weather selectedCity={city} />, {
        wrapper: MemoryRouter,
      });
    });
    const loadingText = screen.getByText(/Retrieving weather data/i);
    // Assert
    expect(loadingText).toBeInTheDocument();
  });

  it("should render weather cards only 4 times", async () => {
    // Arrange
    await act(
      async () => await getWeather.mockResolvedValueOnce(testWeatherData)
    );

    const city = testCities.results[0];

    // Act
    await act(async () => {
      render(<Weather selectedCity={city} />, {
        wrapper: MemoryRouter,
      });
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
