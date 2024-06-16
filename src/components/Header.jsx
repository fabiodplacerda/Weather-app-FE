import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { NavLink, useLocation, Link, useNavigate } from "react-router-dom";

export const Header = ({
  setSearchTerm,
  favouriteCities,
  user,
  setUser,
  setSelectedCity,
}) => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    navigate("/");
    setSearchInput("");
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img id="logo" src="/assets/logo.png" alt="df weather logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {user && (
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/login"
                    onClick={() => {
                      sessionStorage.clear();
                      setUser(null);
                    }}
                  >
                    Logout
                  </NavLink>
                </li>
              )}
              {!user && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
              {user && favouriteCities.length > 0 && (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/favouritelocations"
                    role="button"
                    aria-expanded="false"
                  >
                    My Saved Locations
                  </Link>
                  <ul className="dropdown-menu">
                    {favouriteCities.map((city, index) => {
                      const country = city.country.replaceAll(" ", "");
                      const cityName = city.city.replaceAll(" ", "");
                      return (
                        <li key={index}>
                          <Link
                            className="dropdown-item"
                            to={`/weather/${cityName}/${country}`}
                            onClick={() => {
                              setSelectedCity(city);
                            }}
                          >
                            {city.city}, {city.country}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
            </ul>
            {location.pathname !== "/" && (
              <form className="d-flex" role="search" onSubmit={submitHandler}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="ex. London, Uk"
                  aria-label="location search"
                  onChange={onChangeHandler}
                  value={searchInput}
                />
                <button id="search-icon" type="submit">
                  <SearchIcon sx={{ fontSize: 30 }}></SearchIcon>
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
