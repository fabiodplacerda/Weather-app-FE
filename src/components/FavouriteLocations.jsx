import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

export const FavouriteLocations = ({ favouriteCities }) => {
  return (
    <>
      <div id="favourites-container">
        <h1 className="text-center">Telling You About...</h1>
        <h2 className="text-center mt-3">Favourite Locations</h2>
        <div className="container mt-5">
          <div className="row">
            {favouriteCities.map((city, index) => {
              return (
                <div
                  key={index}
                  className="d-flex col-sm-12 col-md-6 col-lg-3 justify-content-center"
                  data-testid="single-favourite-city"
                >
                  <BookmarkRemoveIcon
                    sx={{ fontSize: 30 }}
                  ></BookmarkRemoveIcon>
                  <p className="fs-5 mx-3">{city}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
