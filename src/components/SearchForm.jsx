import { useState } from "react";
import { getCities } from "../services/geocoding.service";
import { Link } from "react-router-dom";
import citiesDataObj from "../../data/citiesDataObj";

export const SearchForm = ({ setSelectedCity }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [error, setError] = useState(false);

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    // const cities = await getCities(searchInput);
    // ! TEST DATA
    const cities = citiesDataObj;

    if (cities instanceof Error) {
      setError(true);
      return;
    }
    setSuggestion(cities.results);
    setError(false);

    setSearchInput("");
  };

  return (
    <div className="card form-card">
      <div className="card-header text-center fs-4 form-card-header">
        Tell me about...
      </div>
      <div className="card-body d-flex justify-content-center p-5">
        <form className="col-6" onSubmit={searchHandler}>
          <div className="mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Location name..."
              aria-label="search location input"
              id="search-box"
              onChange={onChangeHandler}
              value={searchInput}
            />
          </div>
          {error && (
            <p className="text-center text-danger">
              Something went wrong! Please try again
            </p>
          )}
          {suggestion.length > 1 && (
            <div className="dropdown">
              <button
                id="dropdown-search-suggestion"
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select a location
              </button>
              <ul className="dropdown-menu">
                {suggestion.map((city, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/weather/${city.formatted}`}
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        setSelectedCity(city);
                      }}
                    >
                      {city.formatted}
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              id="search-button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
