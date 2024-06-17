import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FavouriteLocations } from "../src/components/FavouriteLocations";
import { act } from "react";
import testUsers from "./data/testUser";
import { removeFavouriteCity } from "../src/services/user.service";
import userEvent from "@testing-library/user-event";

const { users } = testUsers;

const mockedFunction = vi.fn();

vi.mock("../src/services/user.service");

describe("FavouriteLocations tests", () => {
  const testUser = users[0];
  it("should render the right number of favourite cities", () => {
    const { favouriteCities } = testUser;
    const expected = favouriteCities.length;

    act(() => {
      render(
        <FavouriteLocations
          favouriteCities={favouriteCities}
          setFavouriteCities={mockedFunction}
          setSelectedCity={mockedFunction}
          user={testUser}
        />,
        {
          wrapper: MemoryRouter,
        }
      );
    });

    const favouriteCitiesElements = screen.getAllByTestId(
      "single-favourite-city"
    );

    expect(favouriteCitiesElements.length).toBe(expected);
  });

  // Test for empty favourite cities list
  it("should display 'No cities have been saved yet' when the list is empty", () => {
    const favouriteCities = [];

    act(() => {
      render(
        <FavouriteLocations
          favouriteCities={favouriteCities}
          setFavouriteCities={mockedFunction}
          setSelectedCity={mockedFunction}
          user={testUser}
        />,
        {
          wrapper: MemoryRouter,
        }
      );
    });

    expect(
      screen.getByText("No cities have been saved yet")
    ).toBeInTheDocument();
  });

  it("should remove a city from the list when its bookmark icon is clicked", async () => {
    const testUser = {
      _id: "user123",
      favouriteCities: [
        {
          city: "Paris",
          country: "France",
          latitude: 48.8566,
          longitude: 2.3522,
        },
        {
          city: "New York",
          country: "USA",
          latitude: 40.7128,
          longitude: -74.006,
        },
      ],
    };

    let currentFavouriteCities = testUser.favouriteCities;

    const setFavouriteCities = (newCities) => {
      currentFavouriteCities = newCities;
      rerender(
        <FavouriteLocations
          favouriteCities={currentFavouriteCities}
          setFavouriteCities={setFavouriteCities}
          setSelectedCity={mockedFunction}
          user={testUser}
        />,
        {
          wrapper: MemoryRouter,
        }
      );
    };

    removeFavouriteCity.mockResolvedValueOnce({
      ...testUser,
      favouriteCities: testUser.favouriteCities.filter(
        (city) => city.city !== "New York"
      ),
    });

    const { rerender } = render(
      <FavouriteLocations
        favouriteCities={currentFavouriteCities}
        setFavouriteCities={setFavouriteCities}
        setSelectedCity={mockedFunction}
        user={testUser}
      />,
      {
        wrapper: MemoryRouter,
      }
    );

    const bookmark = screen.getAllByTestId("BookmarkRemoveIcon");
    const cityToRemove = screen.getByText(/New York/);
    userEvent.click(bookmark[1]);

    await waitFor(() => {
      expect(
        screen.getByText(/New York has been successfully removed/)
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(cityToRemove).not.toBeInTheDocument();
    });
  });
});
