import { useState } from "react";
import { getUser } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";

export const UserForm = ({ action, setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = async () => {
    const userData = await getUser(email);
    if (userData.password === password) {
      sessionStorage.setItem("user", JSON.stringify(userData));
      setLoading(true);
      setUser(userData);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setError(true);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (action === "Login") {
      await login();
    } else if (action === "Sign Up") {
    }
  };

  if (loading) {
    return <Loading text={"Login Successful"} />;
  }

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
                setError(false);
              }}
            />
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
                  setError(false);
                }}
              />
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
                setError(false);
              }}
            />
          </div>
          {error && (
            <p className="text-danger">
              Email or password are wrong! Try again
            </p>
          )}
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary">
              {action}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
