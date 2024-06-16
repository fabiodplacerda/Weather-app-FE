import { useState } from "react";
import { addUser, getUser, login } from "../services/user.service";
import { useNavigate } from "react-router-dom";

import LoadingButton from "@mui/lab/LoadingButton";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "./utils/formValidation";

export const UserForm = ({ action, setUser, setFavouriteCities }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const sendLogin = async () => {
    const userData = await login(email, password);
    if (userData.hasOwnProperty("email")) {
      sessionStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.setItem(
        "favouriteCities",
        JSON.stringify(userData.favouriteCities)
      );
      setIsLoading(true);
      setIsLoginSuccessful(true);
      setTimeout(() => {
        setUser(userData);
        setFavouriteCities(userData.favouriteCities);
        navigate("/");
      }, 1500);
    } else {
      setError({ message: "Email or password are wrong! Try again" });
    }
  };

  const signUp = async () => {
    const userData = await getUser(email);
    const isEmailValid = validateEmail(email, setIsEmailValid);
    const isNameValid = validateName(name, setIsNameValid);
    const isPasswordValid = validatePassword(password, setIsPasswordValid);
    if (
      !userData.hasOwnProperty("email") &&
      isEmailValid &&
      isNameValid &&
      isPasswordValid
    ) {
      try {
        await addUser({
          email: email,
          name: name,
          password: password,
        });
        setIsRegisterSuccessful(true);
        setIsLoading(true);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } catch (e) {
        console.log(e.message);
      }
    } else if (isEmailValid && isNameValid && isPasswordValid) {
      setError({ message: "Email already in use" });
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (action === "Login") {
      await sendLogin();
    } else if (action === "Sign Up") {
      await signUp();
    }
  };

  return (
    <div className="card form-card">
      <div className="card-header text-center fs-4 form-card-header">
        {action}
      </div>
      <div className="card-body d-flex justify-content-center p-5">
        <form className="col-6" noValidate onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fs-5">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              aria-label="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
                setIsEmailValid(true);
              }}
            />
            {!isEmailValid && (
              <p className="text-danger" data-testid="invalid-email-text">
                Email not valid
              </p>
            )}
          </div>
          {action === "Sign Up" && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="name"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError(null);
                  setIsNameValid(true);
                }}
              />
              {!isNameValid && (
                <p className="text-danger" data-testid="invalid-name-text">
                  Name should have at least 3 characters
                </p>
              )}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fs-5">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              aria-label="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
                setIsPasswordValid(true);
              }}
            />
            {!isPasswordValid && (
              <p className="text-danger" data-testid="invalid-password-text">
                Password must be 8+ characters <br />1 uppercase
                <br /> 1 number <br />1 special character.
              </p>
            )}
          </div>
          {isRegisterSuccessful && (
            <p className="text-success">Account created successfully</p>
          )}
          {isLoginSuccessful && (
            <p className="text-success">Login was Successful</p>
          )}
          {error && <p className="text-danger">{error.message}</p>}
          <div className="d-flex justify-content-center mt-4">
            <LoadingButton
              id="loading-button"
              loading={isLoading}
              loadingIndicator="Loading…"
              variant="contained"
              type="submit"
              data-testid="loading-button"
            >
              {action}
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};
