import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { SearchForm } from "../src/components/SearchForm";

describe("Search Form tests", () => {
  it("should empty the text box after search", async () => {
    // Arrange
    // Act
    render(<SearchForm />, { wrapper: MemoryRouter });
    const searchInput = screen.getByRole("searchbox");
    const button = screen.getByRole("button");
    await userEvent.type(searchInput, "London");
    await userEvent.click(button);
    // screen.debug();
    // Assert
    expect(searchInput.value).toEqual("London");
  });
});
