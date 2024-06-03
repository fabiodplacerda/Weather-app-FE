export const SignUp = () => {
  return (
    <div className="card form-card">
      <div className="card-header text-center fs-4 form-card-header">
        Sign Up
      </div>
      <div className="card-body d-flex justify-content-center p-5">
        <form className="col-6">
          <div className="mb-3">
            <label htmlFor="username" className="form-label fs-5">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              id="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fs-5">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
