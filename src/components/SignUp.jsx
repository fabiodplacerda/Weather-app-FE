export const SignUp = () => {
  return (
    <div className="card form-card">
      <div class="card-header text-center fs-4">Sign Up</div>
      <div class="card-body d-flex justify-content-center p-5">
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
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
