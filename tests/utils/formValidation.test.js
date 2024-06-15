import {
  validateEmail,
  validateName,
  validatePassword,
} from "../../src/components/utils/formValidation";

describe("Form validation tests", () => {
  const mockedFunction = vi.fn();
  describe("validatePassword tests", () => {
    it("should return true if password if valid", () => {
      // Arrange
      const password = "PasswordTest1!";
      // Act
      const result = validatePassword(password, mockedFunction);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false if password if not valid", () => {
      // Arrange
      const password = "PasswordTest!";
      // Act
      const result = validatePassword(password, mockedFunction);
      // Assert
      expect(result).toBeFalsy();
    });
  });
  describe("validateEmail tests", () => {
    it("should return true if email if valid", () => {
      // Arrange
      const testEmail = "testEmail@testEmail.com";
      // Act
      const result = validateEmail(testEmail, mockedFunction);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false if email if not valid", () => {
      // Arrange
      const testEmail = "email.com";
      // Act
      const result = validateEmail(testEmail, mockedFunction);
      // Assert
      expect(result).toBeFalsy();
    });
  });
  describe("validateName tests", () => {
    it("should return true if name if valid", () => {
      // Arrange
      const testName = "Name";
      // Act
      const result = validateName(testName, mockedFunction);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false if email if not valid", () => {
      // Arrange
      const testName = "Nam";
      // Act
      const result = validateName(testName, mockedFunction);
      // Assert
      expect(result).toBeFalsy();
    });
  });
});
