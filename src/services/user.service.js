import axios from "axios";

export const getUser = async (email) => {
  try {
    const user = await axios.get(
      `http://localhost:3000/user/findUserByEmail/${email}`
    );
    return user.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const login = async (email, password) => {
  try {
    const user = await axios.post(`http://localhost:3000/user/login`, {
      email,
      password,
    });
    return user.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const addUser = async (newUser) => {
  try {
    const addedUser = await axios.post("http://localhost:3000/user/", newUser);
    return addedUser.data;
  } catch (e) {
    return e;
  }
};

export const updateUserCities = async (id, newCity) => {
  const formattedBody = { newFavouriteCity: newCity };

  try {
    const updateUser = await axios.patch(
      `http://localhost:3000/user/updateFavouriteCities/${id}`,
      formattedBody
    );
    return updateUser.data;
  } catch (e) {
    console.log(e.response);
    return e;
  }
};
export const removeFavouriteCity = async (id, cityToRemove) => {
  const formattedBody = { cityToRemove: cityToRemove };

  try {
    const updateUser = await axios.patch(
      `http://localhost:3000/user/removeFavouriteCity/${id}`,
      formattedBody
    );
    return updateUser.data;
  } catch (e) {
    console.log(e.response);
    return e;
  }
};
