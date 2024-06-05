import axios from "axios";

export const getWeather = async (lat, lon) => {
  try {
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d8846db496071496646009367dd8705f`
    );
    return weather.data;
  } catch (e) {
    return e;
  }
};
