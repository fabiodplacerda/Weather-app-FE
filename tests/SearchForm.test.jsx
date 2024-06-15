import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "../src/components/SearchForm";
import testCities from "./data/testCities";

import * as services from "../src/services/geocoding.service";
import { act } from "react";

vi.mock("../src/services/geocoding.service");

describe("Search Form tests", () => {
  it("should empty the text box after search", async () => {
    // Arrange
    await act(
      async () => await services.getCities.mockResolvedValueOnce(testCities)
    );

    // Act
    await act(async () => {
      render(<SearchForm searchTerm={""} />, { wrapper: MemoryRouter });
    });
    const searchInput = screen.getByRole("searchbox");
    const button = screen.getByRole("button");
    await userEvent.type(searchInput, "London");
    await userEvent.click(button);
    // screen.debug();
    // Assert
    expect(searchInput.value).toEqual("");
  });
});
