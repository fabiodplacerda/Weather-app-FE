import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { useEffect, useState } from "react";
import { getWeather } from "../services/weather.service";
import weatherListFormatter from "./utils/weatherListFormatter";
import { Loading } from "./Loading";
import { Error } from "./Error";
import weatherDataObj from "../../data/weatherDataObj";
import { WeatherCard } from "./WeatherCard";
import { Link } from "react-router-dom";

export const Weather = ({ selectedCity, user }) => {
  const [cityWeather, setCityWeather] = useState([]);
  const [cityDetails, setCityDetails] = useState({ name: "", country: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getWeatherFromServices = async () => {
    try {
      const { lat, lng } = selectedCity.geometry;
      // const weather = await getWeather(lat, lng);

      // ! TEST OBJECT
      const weather = weatherDataObj;

      const list = weather.list;
      setCityDetails({
        name: weather.city.name,
        country: weather.city.country,
      });
      const listFormatted = weatherListFormatter(list);

      console.log(cityWeather);
      setError(false);
      setCityWeather(listFormatted);
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  useEffect(() => {
    getWeatherFromServices();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loading text={"Retrieving weather data"} />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <div id="weather-container">
        <h2 className="text-center">
          {cityDetails.name}, {cityDetails.country}
        </h2>
        <div className="text-center">
          {user ? (
            <p className="fs-5">
              <span>
                <BookmarkAddIcon></BookmarkAddIcon>
              </span>
              {"  "}
              Click to add to favourites
            </p>
          ) : (
            <p className="fs-5">
              {<Link to="/login">Login</Link>} to add this city to your
              favourites
            </p>
          )}
        </div>
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
