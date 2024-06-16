import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FavouriteLocations } from "../src/components/FavouriteLocations";
import { act } from "react";
import testUsers from "./data/testUser";

describe("FavouriteLocations tests", () => {
  it("should render the right number of favourite cities", () => {
    const { users } = testUsers;
    const { favouriteCities } = users[0];
    const expected = favouriteCities.length;

    act(() => {
      render(<FavouriteLocations favouriteCities={favouriteCities} />, {
        wrapper: MemoryRouter,
      });
    });

    const favouriteCitiesElements = screen.getAllByTestId(
      "single-favourite-city"
    );

    expect(favouriteCitiesElements.length).toBe(expected);
  });
});
