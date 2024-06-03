export const SearchForm = () => {
  return (
    <div className="card form-card">
      <div className="card-header text-center fs-4 form-card-header">
        Tell me about...
      </div>
      <div className="card-body d-flex justify-content-center p-5">
        <form className="col-6">
          <div className="mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Location name..."
              aria-label="search location input"
              id="search-box"
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              id="search-button"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
