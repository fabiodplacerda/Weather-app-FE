export const WeatherCard = ({ city, index }) => {
  return (
    <div className="col-md-3 col-6 mt-3" key={index}>
      <div className="card weather-card" data-testid="weather-card">
        <img
          src={`/assets/weather-icons/${city.icon}.svg`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{city.dayOfWeek}</h5>
          <p className="card-text">
            {city.temp}
            <br />
            {city.weather}
          </p>
        </div>
      </div>
    </div>
  );
};
