import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { Link } from "react-router-dom";
import { removeFavouriteCity } from "../services/user.service";
import { useState } from "react";

export const FavouriteLocations = ({
  favouriteCities,
  setFavouriteCities,
  setSelectedCity,
  user,
}) => {
  const [removedCityMessage, setRemovedCityMessage] = useState(null);
  const removeCityFromFavourites = async (cityToRemove) => {
    try {
      const updatedUser = await removeFavouriteCity(
        user._id,
        user.password,
        cityToRemove
      );
      setFavouriteCities(updatedUser.favouriteCities);
      sessionStorage.setItem(
        "favouriteCities",
        JSON.stringify(updatedUser.favouriteCities)
      );
      setRemovedCityMessage({
        message: `${cityToRemove.city} has been successfully removed`,
      });
      setTimeout(() => {
        setRemovedCityMessage(null);
      }, 1500);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div id="favourites-container">
        <h1 className="text-center">Saved Locations</h1>
        <div className="container mt-5">
          <div className="row">
            {favouriteCities.length > 0 ? (
              favouriteCities.map((city, index) => {
                const country = city.country.replaceAll(" ", "");
                const cityName = city.city.replaceAll(" ", "");
                return (
                  <div
                    key={index}
                    className="d-flex col-sm-12 col-md-6 col-lg-3 justify-content-center"
                    data-testid="single-favourite-city"
                  >
                    <BookmarkRemoveIcon
                      id="remove-icon"
                      sx={{ fontSize: 30 }}
                      onClick={() => removeCityFromFavourites(city)}
                    ></BookmarkRemoveIcon>
                    <Link
                      className="fs-5 mx-3 favourite-city-link"
                      to={`/weather/${cityName}/${country}`}
                      onClick={() => {
                        setSelectedCity(city);
                      }}
                    >
                      {city.city}, {city.country}
                    </Link>
                  </div>
                );
              })
            ) : (
              <p className="text-center fs-4">No cities have been saved yet</p>
            )}
            {removedCityMessage && (
              <p className="text-center fs-4 text-green">
                {removedCityMessage.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
