import moment from "moment";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const weatherListFormatter = (weatherList) => {
  const fiveDaysList = weatherList.filter(
    (e, i) => i === 0 || e.dt_txt.split(" ")[1].split(":")[0] === "15"
  );

  const formattedList = [];
  const seenDates = new Set();

  fiveDaysList.forEach((e) => {
    const fullDate = moment(e.dt * 1000);
    const dateKey = fullDate.format("YYYY-MM-DD");

    if (!seenDates.has(dateKey)) {
      formattedList.push({
        date: fullDate.format("Do MMMM YYYY"),
        dayOfWeek: fullDate.format("dddd"),
        weather: capitalizeFirstLetter(e.weather[0].description),
        icon: e.weather[0].icon,
        temp: `${Math.round(e.main.temp - 273.15)}ºC`,
      });

      seenDates.add(dateKey); // Add the date to the Set to mark it as seen
    }
  });

  if (formattedList.length > 5) formattedList.pop();

  return formattedList;
};

export default weatherListFormatter;
