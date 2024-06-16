import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter } from "react-router-dom";

import { Login } from "../src/components/Login";
import * as userServices from "../src/services/user.service";
import testUsers from "./data/testUser";
import userEvent from "@testing-library/user-event";

const { users } = testUsers;

vi.mock("../src/services/user.service");

describe("Login tests", () => {
  const mockedFunction = vi.fn();
  it("should display a message when Login was successful", async () => {
    await act(async () => userServices.login.mockResolvedValueOnce(users[0]));

    await act(async () => {
      render(<Login setUser={mockedFunction} />, { wrapper: MemoryRouter });
    });

    const emailInput = screen.getByRole("textbox", { name: /email/ });
    const passwordInput = screen.getByLabelText("password");
    const loginButton = screen.getByTestId("loading-button");

    await userEvent.type(emailInput, "user1@example.com");
    await userEvent.type(passwordInput, "Password1!");
    await userEvent.click(loginButton);

    const successfulLoginText = screen.getByText("Login was Successful");

    expect(successfulLoginText).toBeInTheDocument();
  });
  it("should display a error message when Login was not successful", async () => {
    await act(async () => userServices.login.mockResolvedValueOnce({}));

    await act(async () => {
      render(<Login setUser={mockedFunction} />, { wrapper: MemoryRouter });
    });

    const emailInput = screen.getByRole("textbox", { name: /email/ });
    const passwordInput = screen.getByLabelText("password");
    const loginButton = screen.getByTestId("loading-button");

    await userEvent.type(emailInput, "user1@example.com");
    await userEvent.type(passwordInput, "Password1!");
    await userEvent.click(loginButton);

    const unsuccessfulLoginText = screen.getByText(
      "Email or password are wrong! Try again"
    );

    expect(unsuccessfulLoginText).toBeInTheDocument();
  });
});
