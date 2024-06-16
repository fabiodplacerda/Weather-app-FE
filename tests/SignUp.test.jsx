import { render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter } from "react-router-dom";

import { SignUp } from "../src/components/SignUp";
import * as userServices from "../src/services/user.service";
import testUsers from "./data/testUser";
import userEvent from "@testing-library/user-event";

const { users, newUser } = testUsers;

vi.mock("../src/services/user.service");

describe("User Form tests", () => {
  it("should display a message when register was successful", async () => {
    await act(async () => userServices.getUser.mockResolvedValueOnce({}));
    await act(async () => userServices.addUser.mockResolvedValueOnce(newUser));

    await act(async () => {
      render(<SignUp />, { wrapper: MemoryRouter });
    });

    const emailInput = screen.getByRole("textbox", { name: /email/ });
    const nameInput = screen.getByLabelText("name");
    const passwordInput = screen.getByLabelText("password");
    const signUpButton = screen.getByTestId("loading-button");

    await userEvent.type(emailInput, newUser.email);
    await userEvent.type(nameInput, newUser.name);
    await userEvent.type(passwordInput, newUser.password);
    await userEvent.click(signUpButton);

    const successfulRegisterText = screen.getByText(
      "Account created successfully"
    );

    expect(successfulRegisterText).toBeInTheDocument();
  });
  it("should display a message when register was successful", async () => {
    await act(async () => userServices.getUser.mockResolvedValueOnce(users[0]));
    await act(async () => userServices.addUser.mockResolvedValueOnce({}));

    await act(async () => {
      render(<SignUp />, { wrapper: MemoryRouter });
    });

    const emailInput = screen.getByRole("textbox", { name: /email/ });
    const nameInput = screen.getByLabelText("name");
    const passwordInput = screen.getByLabelText("password");
    const signUpButton = screen.getByTestId("loading-button");

    await userEvent.type(emailInput, newUser.email);
    await userEvent.type(nameInput, newUser.name);
    await userEvent.type(passwordInput, newUser.password);
    await userEvent.click(signUpButton);

    const unsuccessfulRegisterText = screen.getByText("Email already in use");

    expect(unsuccessfulRegisterText).toBeInTheDocument();
  });
  it("should display error texts if fields are invalid", async () => {
    await act(async () => userServices.getUser.mockResolvedValueOnce({}));
    await act(async () => userServices.addUser.mockResolvedValueOnce({}));

    await act(async () => {
      render(<SignUp />, { wrapper: MemoryRouter });
    });

    const emailInput = screen.getByRole("textbox", { name: /email/ });
    const nameInput = screen.getByLabelText("name");
    const passwordInput = screen.getByLabelText("password");
    const signUpButton = screen.getByTestId("loading-button");

    await userEvent.type(emailInput, "email");
    await userEvent.type(nameInput, "Nam");
    await userEvent.type(passwordInput, "password");
    await userEvent.click(signUpButton);

    const invalidNameText = screen.getByTestId("invalid-name-text");
    const invalidEmailText = screen.getByTestId("invalid-email-text");
    const invalidPasswordText = screen.getByTestId("invalid-password-text");

    expect(invalidEmailText).toBeInTheDocument();
    expect(invalidNameText).toBeInTheDocument();
    expect(invalidPasswordText).toBeInTheDocument();
  });
});
