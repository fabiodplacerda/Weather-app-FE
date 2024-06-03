export const UserForm = ({ action }) => {
  return (
    <div className="card form-card">
      <div className="card-header text-center fs-4 form-card-header">
        {action}
      </div>
      <div className="card-body d-flex justify-content-center p-5">
        <form className="col-6" noValidate>
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
              {action}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
