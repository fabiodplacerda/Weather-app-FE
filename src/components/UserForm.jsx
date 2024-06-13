import { useState } from "react";
import { addUser, getUser } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

import LoadingButton from "@mui/lab/LoadingButton";

export const UserForm = ({ action, setUser }) => {
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

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const itMatches = passwordRegex.test(password);
    setIsPasswordValid(itMatches);
    return itMatches;
  };
  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const itMatches = emailRegex.test(email);
    setIsEmailValid(itMatches);
    return itMatches;
  };
  const validateName = () => {
    const itMatches = name.length > 3;
    setIsNameValid(itMatches);
    return itMatches;
  };

  const login = async () => {
    const userData = await getUser(email);
    if (userData.password === password) {
      sessionStorage.setItem("user", JSON.stringify(userData));
      setIsLoading(true);
      setIsLoginSuccessful(true);
      setTimeout(() => {
        setUser(userData);
        navigate("/");
      }, 1500);
    } else {
      setError({ message: "Email or password are wrong! Try again" });
    }
  };

  const signUp = async () => {
    const userData = await getUser(email);
    const isEmailValid = validateEmail();
    const isNameValid = validateName();
    const isPasswordValid = validatePassword();
    if (
      !userData.hasOwnProperty("email") &&
      isEmailValid &&
      isNameValid &&
      isPasswordValid
    ) {
      try {
        const addedUser = await addUser({
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
      await login();
    } else if (action === "Sign Up") {
      await signUp();
    }
  };

  // if (loading) {
  //   return <Loading text={"Login Successful"} />;
  // }

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
            {!isEmailValid && <p className="text-danger">Email not valid</p>}
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
                <p className="text-danger">
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
                setIsPasswordValid(true);
              }}
            />
            {!isPasswordValid && (
              <p className="text-danger">
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
            >
              {action}
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};
