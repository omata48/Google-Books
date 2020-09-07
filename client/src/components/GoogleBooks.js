import React from "react";

function GoogleBooks(props){
  const { bookList } = props
  return <ul className="list-group">
    {bookList.map((book) => (
      <li key={book.id} className="list-group-item">
        <div className="row">
          <div className="col-md-8 mt-2">
            <h3>{book.volumeInfo.title}</h3>
            {book.volumeInfo.subtitle && <h5>{book.volumeInfo.subtitle}</h5>}
            <p>Written by {book.volumeInfo.authors.join(", ")} </p>
          </div>
          <div className="col-md-4 mb-3">
            <div className="btn-container float-right">
              <a
                className="btn btn-light"
                target="_blank"
                rel="noopener noreferrer"
                href={book.volumeInfo.infoLink}
              >
                View
              </a>
              <button
                onClick={() => this.handleBookSave(book.id)}
                className="btn btn-primary ml-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-4 col-md-2 mb-2">
            <img
              className="img-thumbnail img-fluid w-100"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          </div>
          <div className="col-12 col-sm-8 col-md-10 p-4">
            <p>{book.volumeInfo.description}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>;
}

export default GoogleBooks;