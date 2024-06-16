import { useEffect, useState } from "react";
import { getCities } from "../services/geocoding.service";
import { Link, useNavigate } from "react-router-dom";
import citiesDataObj from "../../data/citiesDataObj";

export const SearchForm = ({ setSelectedCity, searchTerm }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.length > 1) {
      setSearchInput(searchTerm);
    }
  }, []);

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    const cities = await getCities(searchInput);

    // ! TEST DATA
    // const cities = citiesDataObj;

    if (cities instanceof Error) {
      setError({
        message: "Something went wrong retrieving the data! Please try again",
      });
      return;
    }

    const results = cities.results;

    if (results.length === 1) {
      setSelectedCity(results[0]);
      const cityName = results[0].components.city.replaceAll(" ", "");
      const countryName = results[0].components.country.replaceAll(" ", "");
      navigate(`/weather/${cityName}/${countryName}`);
    } else if (results.length === 0) {
      setError({
        message: `Failed to search for ${searchInput}, please provide a valid city name and country`,
      });
      setSuggestion(results);
    } else {
      setSuggestion(results);
      setError(false);

      setSearchInput("");
    }
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
              {error.message} <br /> ex. London, UK
            </p>
          )}
          {suggestion.length > 0 && (
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
                  const country = city.components.country.replaceAll(" ", "");
                  const cityName =
                    city.components.state || city.components.city;
                  const formattedCityName = cityName.replaceAll(" ", "");
                  return (
                    <Link
                      key={index}
                      to={`/weather/${formattedCityName}/${country}`}
                      className="dropdown-item"
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
