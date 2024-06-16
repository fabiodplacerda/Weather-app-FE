import axios from "axios";

export const getCities = async (cityName) => {
  const url =
    import.meta.env.NODE_ENV === "test"
      ? import.meta.env.VITE_APP_GEOCODINGURL
      : `${import.meta.env.VITE_APP_GEOCODINGURL}?q=${cityName}&key=${
          import.meta.env.VITE_APP_GEOCODINGAPIKEY
        }&language=en&pretty=1`;
  try {
    const geoCode = await axios.get(url);
    return geoCode.data;
  } catch (e) {
    console.log(e.message);
    return e;
  }
};
