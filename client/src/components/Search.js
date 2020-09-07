import React from "react";

function Search(props) {
  const { q, handleInputChange, handleFormSubmit } = props;
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <i className={"fa fa-far fa-book"} /> Book Search
        </h3>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="query">Book</label>
            <input
              className="form-control"
              id="title"
              value={q}
              type="text"
              placeholder="Harry Potter"
              name="q"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="pull-right">
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="btn btn-lg float-right"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
