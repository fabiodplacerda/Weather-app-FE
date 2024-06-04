import { useState } from "react";
import { getCities } from "../utils/geocoding.service";
import { Link } from "react-router-dom";

export const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [error, setError] = useState(false);

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const cities = await getCities(searchInput);

    if (cities instanceof Error) {
      setError(true);
      return;
    }
    // console.log(cities);
    // setSuggestion(geoCode.results);
    setSuggestion(cities);
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
                {suggestion.map((city) => {
                  return (
                    <li key={city.id}>
                      <Link to="/weather" className="dropdown-item" href="#">
                        {city.formatted}
                      </Link>
                    </li>
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
