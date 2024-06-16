export const cityExists = (favouriteCitiesArray, cityName, country) => {
  console.log(favouriteCitiesArray, cityName, country);
  return favouriteCitiesArray.some(
    (city) => `${city.city} ${city.country}` === `${cityName} ${country}`
  );
};
