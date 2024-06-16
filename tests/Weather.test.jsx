import { act } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Weather } from "../src/components/Weather";
import { getWeather } from "../src/services/weather.service";
import { updateUserCities } from "../src/services/user.service";

import testCities from "./data/testCities";
import testWeatherData from "./data/testWeatherData";
import testUsers from "./data/testUser";
import userEvent from "@testing-library/user-event";
const { users, updateUser } = testUsers;

vi.mock("../src/services/weather.service");
vi.mock("../src/services/user.service");

describe("Weather component tests", () => {
  const mockFunction = vi.fn();
  it("should render loading when the page first loads", async () => {
    // Arrange
    await act(
      async () => await getWeather.mockResolvedValueOnce(testWeatherData)
    );
    const city = testCities.results[0];

    // Act
    await act(async () => {
      render(
        <Weather
          selectedCity={city}
          user={users[0]}
          favouriteCities={users[0].favouriteCities}
          setFavouriteCities={mockFunction}
        />,
        {
          wrapper: MemoryRouter,
        }
      );
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
      render(
        <Weather
          selectedCity={city}
          user={users[0]}
          favouriteCities={users[0].favouriteCities}
          setFavouriteCities={mockFunction}
        />,
        {
          wrapper: MemoryRouter,
        }
      );
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

  it("should show display a text for user to login to add to bookmarks if no users was found", async () => {
    // Arrange
    await act(async () => {
      await getWeather.mockResolvedValueOnce(testWeatherData);
    });

    const city = testCities.results[0];

    // Act
    await act(async () => {
      render(
        <Weather
          selectedCity={city}
          user={null}
          favouriteCities={null}
          setFavouriteCities={mockFunction}
        />,
        {
          wrapper: MemoryRouter,
        }
      );
    });

    await waitFor(
      () => {
        expect(
          screen.queryByText(/Retrieving weather data/i)
        ).not.toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    // Assert
    const loginText = await screen.findByText(
      /add this city to your favourites/
    );
    const loginLink = await screen.findByText(/Login/);
    expect(loginText).toBeInTheDocument();
  });
  it("should show a successful message text when adding a city to favourites was successful", async () => {
    // Arrange
    await act(async () => {
      await getWeather.mockResolvedValueOnce(testWeatherData);
      await updateUserCities.mockResolvedValueOnce(updateUser);
    });

    const city = testCities.results[0];

    // Act
    await act(async () => {
      render(
        <Weather
          selectedCity={city}
          user={users[0]}
          favouriteCities={users[0].favouriteCities}
          setFavouriteCities={mockFunction}
        />,
        {
          wrapper: MemoryRouter,
        }
      );
    });

    await waitFor(
      () => {
        expect(
          screen.queryByText(/Retrieving weather data/i)
        ).not.toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    // Assert
    const bookmarkIcon = await waitFor(() =>
      screen.getByTestId("bookmark-icon")
    );
    userEvent.click(bookmarkIcon);

    const successMessage = await waitFor(() =>
      screen.getByText(/City has been added to the bookmarks successfully/i)
    );
    expect(successMessage).toBeInTheDocument();
  });
});
