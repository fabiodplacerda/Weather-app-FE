import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FavouriteLocations } from "../src/components/FavouriteLocations";
import { act } from "react";

describe("FavouriteLocations tests", () => {
  it("should render the right number of favourite cities", () => {
    const testFavouriteCities = ["New York", "Paris", "London"];

    act(() => {
      render(<FavouriteLocations favouriteCities={testFavouriteCities} />, {
        wrapper: MemoryRouter,
      });
    });

    const favouriteCities = screen.getAllByTestId("single-favourite-city");

    expect(favouriteCities.length).toBe(3);
  });
});
