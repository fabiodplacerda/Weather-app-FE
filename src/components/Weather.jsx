import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { useEffect, useState } from "react";
import { getWeather } from "../services/weather.service";
import weatherListFormatter from "./utils/weatherListFormatter";
import { Loading } from "./Loading";
import { Error } from "./Error";
import weatherDataObj from "../../data/weatherDataObj";
import { WeatherCard } from "./WeatherCard";
import { Link } from "react-router-dom";
import { updateUserCities } from "../services/user.service";
import { cityExists } from "./utils/cityExists";

export const Weather = ({
  selectedCity,
  user,
  favouriteCities,
  setFavouriteCities,
}) => {
  const [cityWeather, setCityWeather] = useState([]);
  const [cityDetails, setCityDetails] = useState({ name: "", country: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);

  if (error || !Object.keys(selectedCity).length) {
    return <Error />;
  }

  const { city: cityName = "", country = "" } = selectedCity.components || {};

  const { lat, lng } = selectedCity.geometry ?? {};
  const latitude = lat ?? selectedCity.latitude;
  const longitude = lng ?? selectedCity.longitude;

  const getWeatherFromServices = async () => {
    try {
      const weather = await getWeather(latitude, longitude);

      // ! TEST OBJECT
      // const weather = weatherDataObj;

      const list = weather.list;
      setCityDetails({
        city: cityName,
        country: country,
        latitude: lat,
        longitude: lng,
      });
      // console.log(list);
      const listFormatted = weatherListFormatter(list);
      setError(false);
      setCityWeather(listFormatted);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  const addCityToFavourites = async () => {
    try {
      const updatedUser = await updateUserCities(user._id, cityDetails);
      setFavouriteCities(updatedUser.favouriteCities);
      sessionStorage.setItem(
        "favouriteCities",
        JSON.stringify(updatedUser.favouriteCities)
      );
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
      }, 1500);
    } catch (e) {
      console.log(e.message);
      setError(true);
    }
  };

  useEffect(() => {
    getWeatherFromServices();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [selectedCity]);

  if (isLoading) {
    return <Loading text={"Retrieving weather data"} />;
  }

  return (
    <>
      <div id="weather-container">
        <h2 className="text-center">
          {cityName || selectedCity.city || selectedCity.state},{" "}
          {country || selectedCity.country}
        </h2>
        <div className="text-center">
          {user ? (
            !cityExists(
              favouriteCities,
              cityName || selectedCity.city,
              country || selectedCity.country
            ) ? (
              <p className="fs-5">
                <span>
                  <BookmarkAddIcon
                    onClick={addCityToFavourites}
                    sx={{ fontSize: 33 }}
                    id="bookmark-icon"
                    style={{ cursor: "pointer" }}
                    data-testid="bookmark-icon"
                  />
                </span>
                {"  "}
                Click to add to favourites
              </p>
            ) : null
          ) : (
            <p className="fs-5">
              {<Link to="/login">Login</Link>} to add this city to your
              favourites
            </p>
          )}
        </div>
        {added && (
          <p className="text-center text-green fs-5">
            City has been added to the bookmarks successfully
          </p>
        )}
        <div className="text-center">
          <h3>Today's Weather:</h3>
          {cityWeather[0] ? <p>{cityWeather[0].date}</p> : <p>Loading.....</p>}
        </div>
        <div className="text-center">
          <p>
            {" "}
            <span>
              <img
                src={`/assets/weather-icons/${cityWeather[0].icon}.svg`}
                alt=""
              />
            </span>
            {cityWeather[0].temp} {cityWeather[0].weather}
          </p>
        </div>
        <div className="container text-center">
          <div className="row">
            {cityWeather.map((city, index) => {
              if (index !== 0) {
                return <WeatherCard city={city} key={index} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
