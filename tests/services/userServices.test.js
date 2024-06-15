import axios from "axios";
import { addUser, getUser } from "../../src/services/user.service";
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
});
