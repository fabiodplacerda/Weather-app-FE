import { Header } from "../src/components/Header";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, RouterProvider } from "react-router-dom";
import testUsers from "./data/testUser";
import userEvent from "@testing-library/user-event";

const { users } = testUsers;

const mockedFn = vi.fn(() => {});
describe("Header Tests", () => {
  const testUser = users[0];
  const userFavouriteCities = testUser.favouriteCities;
  it("should only have 3 options display in the nav if no is logged in", () => {
    render(
      <Header
        setSearchTerm={mockedFn}
        favouriteCities={[]}
        user={null}
        setUser={mockedFn}
        setSelectedCity={mockedFn}
      />,
      { wrapper: MemoryRouter }
    );
    const navBarOptions = screen.getAllByRole("listitem");
    expect(navBarOptions.length).toBe(3);
  });
  it("should display logout option if user is logged in", async () => {
    render(
      <Header
        setSearchTerm={mockedFn}
        favouriteCities={[]}
        user={testUser}
        setUser={mockedFn}
        setSelectedCity={mockedFn}
      />,
      { wrapper: MemoryRouter }
    );

    const logoutOption = screen.getByText(/Logout/);
    expect(logoutOption).toBeInTheDocument();
  });
  it("should the right amount of menu items in the dropdown menu", async () => {
    const expected = userFavouriteCities.length;
    render(
      <Header
        setSearchTerm={mockedFn}
        favouriteCities={userFavouriteCities}
        user={testUser}
        setUser={mockedFn}
        setSelectedCity={mockedFn}
      />,
      { wrapper: MemoryRouter }
    );

    const dropdownItems = screen.getAllByTestId("dropdown-item");

    expect(dropdownItems.length).toBe(expected);
  });
  it("should navigate to home page on logo click", async () => {
    render(
      <Header
        setSearchTerm={mockedFn}
        favouriteCities={[]}
        user={null}
        setUser={mockedFn}
        setSelectedCity={mockedFn}
      />,
      { wrapper: MemoryRouter }
    );
    userEvent.click(screen.getByAltText(/df weather logo/));
    expect(window.location.pathname).toBe("/");
  });
  it("should show the search box when not in the path ('/')", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Header
          setSearchTerm={mockedFn}
          favouriteCities={[]}
          user={null}
          setUser={mockedFn}
          setSelectedCity={mockedFn}
        />
      </MemoryRouter>
    );
    const searchBox = await screen.findByPlaceholderText(/ex. London, Uk/);
    expect(searchBox).toBeInTheDocument();
  });
  it("should change path when user searches for a location", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Header
          setSearchTerm={mockedFn}
          favouriteCities={[]}
          user={null}
          setUser={mockedFn}
          setSelectedCity={mockedFn}
        />
      </MemoryRouter>
    );
    const searchBox = await screen.findByPlaceholderText(/ex. London, Uk/);
    const button = screen.getByTestId("SearchIcon");
    await userEvent.type(searchBox, "London");
    await userEvent.click(button);
    expect(window.location.pathname).toBe("/");
  });
});
