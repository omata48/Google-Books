import React, { useContext } from "react";
import ThemeContext from "./theme-context";


function Search(props) {
  const theme = useContext(ThemeContext)
  
  const { q, handleInputChange, handleFormSubmit } = props;
  return (
    <div className="card mt-4">
      <div className="card-header" style={theme}>
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
              style={theme}
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
