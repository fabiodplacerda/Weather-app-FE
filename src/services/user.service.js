import axios from "axios";

export const getUser = async (email) => {
  try {
    const user = await axios.get(
      `http://localhost:3000/user/findUserByEmail/${email}`
    );
    return user.data;
  } catch (e) {
    return e;
  }
};
