import axios from "axios";

export const getCities = async (cityName) => {
  try {
    // const geoCode = await axios.get(
    //   `https://api.opencagedata.com/geocode/v1/json?q={cityName}&key=13e70d46881544e19ffe91d9cf884e19&language=en&no_annotations=1&pretty=1
    // );
    const geoCode = await axios.get("http://localhost:3000/results");
    return geoCode.data;
  } catch (e) {
    console.log(e.message);
    return e;
  }
};
