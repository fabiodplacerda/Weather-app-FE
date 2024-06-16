import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { Link } from "react-router-dom";

export const FavouriteLocations = ({ favouriteCities, setSelectedCity }) => {
  return (
    <>
      <div id="favourites-container">
        <h1 className="text-center">Telling You About...</h1>
        <h2 className="text-center mt-3">Favourite Locations</h2>
        <div className="container mt-5">
          <div className="row">
            {favouriteCities.map((city, index) => {
              const country = city.country.replaceAll(" ", "");
              const cityName = city.city.replaceAll(" ", "");
              return (
                <div
                  key={index}
                  className="d-flex col-sm-12 col-md-6 col-lg-3 justify-content-center"
                  data-testid="single-favourite-city"
                >
                  <BookmarkRemoveIcon
                    sx={{ fontSize: 30 }}
                  ></BookmarkRemoveIcon>
                  <Link
                    className="fs-5 mx-3"
                    to={`/weather/${cityName}/${country}`}
                    onClick={() => {
                      setSelectedCity(city);
                    }}
                  >
                    {city.city}, {city.country}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
