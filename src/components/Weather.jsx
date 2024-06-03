import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
export const Weather = () => {
  return (
    <div id="weather-container">
      <h2 className="text-center">Place Name</h2>
      <div className="text-center">
        <p>
          <span>
            <BookmarkAddIcon></BookmarkAddIcon>
          </span>
          {"  "}
          Click to add to favourites
        </p>
      </div>
      <div className="text-center">
        <h3>Today's Weather:</h3>
        <p>Day, Xth Mon, Year</p>
      </div>
      <div className="text-center">
        <p>
          {" "}
          <span>
            <img src="/assets/weather-icons/01d.svg" alt="" />
          </span>
          Xº C Weather description
        </p>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-3 col-6 mt-3">
            <div className="card weather-card">
              <img
                src="/assets/weather-icons/01d.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Next Day name</h5>
                <p className="card-text">
                  Xº c <br />
                  weather description
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mt-3">
            <div className="card weather-card">
              <img
                src="/assets/weather-icons/01d.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Next Day name</h5>
                <p className="card-text">
                  Xº c <br />
                  weather description
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mt-3">
            <div className="card weather-card">
              <img
                src="/assets/weather-icons/01d.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Next Day name</h5>
                <p className="card-text">
                  Xº c <br />
                  weather description
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mt-3">
            <div className="card weather-card">
              <img
                src="/assets/weather-icons/01d.svg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Next Day name</h5>
                <p className="card-text">
                  Xº c <br />
                  weather description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
