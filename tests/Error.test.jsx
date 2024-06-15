import { render, screen } from "@testing-library/react";
import { Error } from "../src/components/Error";
import { MemoryRouter } from "react-router-dom";

describe("Error component tests", () => {
  it("renders correctly", () => {
    render(<Error />, { wrapper: MemoryRouter });

    expect(
      screen.getByText(
        /Something went wrong while fetching the data please try again/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to home/i })
    ).toBeInTheDocument();
  });
});
