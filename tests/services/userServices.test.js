import axios from "axios";
import {
  addUser,
  getUser,
  login,
  updateUserCities,
  removeFavouriteCity,
} from "../../src/services/user.service";
import testUsers from "../data/testUser";

const { users, newUser } = testUsers;

vi.mock("axios");

describe("User services tests", () => {
  describe("Get User tests", () => {
    const mockedResolvedUsersData = {
      data: users[0],
    };
    const email = "user1@example.com";
    it("should make the right data call", async () => {
      axios.get.mockResolvedValueOnce(mockedResolvedUsersData);

      await getUser(email);

      expect(axios.get).toHaveBeenCalledWith(
        `http://localhost:3000/user/findUserByEmail/${email}`
      );
    });
    it("should make the correct data call", async () => {
      axios.get.mockResolvedValueOnce(mockedResolvedUsersData);

      const result = await getUser(email);

      expect(result).toEqual(users[0]);
    });
    it("should return an error message if request fails", async () => {
      const error = { message: "Error" };
      axios.get.mockRejectedValueOnce(error);

      const result = await getUser(email);

      expect(result).toEqual(error);
    });
  });
  describe("Login tests", () => {
    const mockedResolvedUsersData = {
      data: users[0],
    };
    const email = "user1@example.com";
    const password = "Password1!";
    it("should make the right data call", async () => {
      axios.post.mockResolvedValueOnce(mockedResolvedUsersData);

      await login(email, password);

      expect(axios.post).toHaveBeenCalledWith(
        `http://localhost:3000/user/login`,
        { email, password }
      );
    });
    it("should make the correct data call", async () => {
      axios.post.mockResolvedValueOnce(mockedResolvedUsersData);

      const result = await login(email, password);

      expect(result).toEqual(users[0]);
    });
    it("should return an error message if request fails", async () => {
      const error = { message: "Error" };
      axios.post.mockRejectedValueOnce(error);

      const result = await login(email, password);

      expect(result).toEqual(error);
    });
  });
  describe("addUser tests", () => {
    const mockedResolvedUsersData = {
      data: newUser,
    };
    it("should make the right data call", async () => {
      axios.post.mockResolvedValueOnce(mockedResolvedUsersData);

      await addUser(newUser);

      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3000/user/",
        newUser
      );
    });
    it("should return the correct data", async () => {
      axios.post.mockResolvedValueOnce(mockedResolvedUsersData);

      const result = await addUser(newUser);

      expect(result).toEqual(newUser);
    });
    it("should return an error if the request fails", async () => {
      const error = { message: "Error" };
      axios.post.mockRejectedValueOnce(error);

      const result = await addUser(newUser);

      expect(result).toEqual(error);
    });
  });
  describe("updateUserCities", () => {
    const testUser = users[0];
    const testId = testUser._id;
    const testUserPassword = testUser.password;
    const newCity = {
      city: "Athens",
      country: "Greece",
      lat: 37.9838,
      lng: 23.7275,
    };
    const updateUser = {
      ...testUser,
      favouriteCities: [...testUser.favouriteCities, newCity],
    };
    const mockedResolvedUsersData = {
      data: updateUser,
    };

    it("should make the right data call", async () => {
      axios.patch.mockResolvedValueOnce(mockedResolvedUsersData);

      await updateUserCities(testId, testUserPassword, newCity);

      expect(axios.patch).toHaveBeenCalledWith(
        `http://localhost:3000/user/updateFavouriteCities/${testId}`,
        { password: testUserPassword, newFavouriteCity: newCity }
      );
    });
    it("should return the correct data", async () => {
      axios.patch.mockResolvedValueOnce(mockedResolvedUsersData);

      const result = await updateUserCities(testId, testUserPassword, newCity);

      expect(result).toEqual(updateUser);
    });
    it("should return an error if the request fails", async () => {
      const testError = { message: "Test error" };
      axios.patch.mockRejectedValueOnce(testError);

      const result = await updateUserCities(testId, testUserPassword, newCity);

      expect(result).toEqual(testError);
    });
  });
  describe("removeFavouriteCity", () => {
    const testUser = users[1];
    const testId = testUser._id;
    const testUserPassword = testUser.password;
    const cityToRemove = {
      city: "Tokyo",
      country: "Japan",
      latitude: 35.6895,
      longitude: 139.6917,
    };
    const updateUser = {
      ...testUser,
      favouriteCities: [
        {
          city: "London",
          country: "UK",
          latitude: 51.5074,
          longitude: -0.1278,
        },
      ],
    };
    const mockedResolvedUsersData = {
      data: updateUser,
    };

    it("should make the right data call", async () => {
      axios.patch.mockResolvedValueOnce(mockedResolvedUsersData);

      await removeFavouriteCity(testId, testUserPassword, cityToRemove);

      expect(axios.patch).toHaveBeenCalledWith(
        `http://localhost:3000/user/removeFavouriteCity/${testId}`,
        { password: testUserPassword, cityToRemove }
      );
    });
    it("should return the correct data", async () => {
      axios.patch.mockResolvedValueOnce(mockedResolvedUsersData);

      const result = await removeFavouriteCity(
        testId,
        cityToRemove,
        cityToRemove
      );

      expect(result).toEqual(updateUser);
    });
    it("should return an error if the request fails", async () => {
      const testError = { message: "Test error" };
      axios.patch.mockRejectedValueOnce(testError);

      const result = await removeFavouriteCity(
        testId,
        cityToRemove,
        cityToRemove
      );

      expect(result).toEqual(testError);
    });
  });
});
