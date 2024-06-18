import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { PageNotFound } from "../src/components/PageNotFound";

describe("PageNotFound component tests", () => {
  it("renders correctly", () => {
    render(<PageNotFound />, { wrapper: MemoryRouter });

    expect(screen.getByText(/404 page not found/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to home/i })
    ).toBeInTheDocument();
  });
});
