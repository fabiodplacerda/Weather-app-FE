import axios from "axios";

export const getWeather = async (lat, lon) => {
  const url =
    import.meta.env.NODE_ENV === "test"
      ? import.meta.env.VITE_APP_WEATHERURL
      : `${import.meta.env.VITE_APP_WEATHERURL}?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_APP_WEATHERAPPKEY
        }`;
  try {
    const weather = await axios.get(url);
    return weather.data;
  } catch (e) {
    return e;
  }
};
