import moment from "moment";

const date = new Date();

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const weatherListFormatter = (weatherList) => {
  const fiveDaysList = weatherList.filter(
    (e, i) => i === 0 || e.dt_txt.split(" ")[1].split(":")[0] === "15"
  );

  fiveDaysList.pop();

  const formattedList = fiveDaysList.map((e) => {
    const fullDate = moment(e.dt * 1000);
    return {
      date: fullDate.format("Do MMMM YYYY"),
      dayOfWeek: fullDate.format("dddd"),
      weather: capitalizeFirstLetter(e.weather[0].description),
      icon: e.weather[0].icon,
      temp: `${Math.round(e.main.temp - 273.15)}ºC`,
    };
  });

  return formattedList;
};

export default weatherListFormatter;
