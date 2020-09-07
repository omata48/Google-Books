import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import GoogleBooks from "../components/GoogleBooks";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id)
      .then((res) => this.getSavedBooks())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card my-4">
              <div className="card-header">
                <h3>
                  <i className={"fa fa-download"} /> Saved Books
                </h3>
              </div>
              {this.state.books.length ? (
                <ul className="list-group">
                  {this.state.books.map((book) => (
                    <GoogleBooks 
											key={book._id}
											title={book.title}
											subtitle={book.subtitle}
											link={book.link}
											authors={book.authors.join(", ")}
											description={book.description}
											image={book.image}
											Button={() => (
												<button
													onClick={() => this.handleBookDelete(book._id)}
													className="btn btn-danger ml-2"
												>
													Delete
												</button>
											)}
										/>
                  ))}
                </ul>
              ) : (
                <h2 className="text-center">No Saved Books!</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
