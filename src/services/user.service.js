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

export const addUser = async (newUser) => {
  try {
    const addedUser = await axios.post("http://localhost:3000/user/", newUser);
    return addedUser.data;
  } catch (e) {
    return e;
  }
};
