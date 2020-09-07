import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import GoogleBooks from "../components/GoogleBooks";
import API from "../utils/API";
import Search from "../components/Search";
import "./style.css";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search for a book above!",
    theme: "base"
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No books found with that search!",
        })
      );
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = (id) => {
    // find matching id from list in state w/ id passed
    const book = this.state.books.find((book) => book.id === id);

    // title, link, authors, desc, imagelink, googleID
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    }).then(() => this.getBooks());
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
            <Search
              q={this.state.q}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card my-4">
              <div className="card-header">
                <h3>Results</h3>
              </div>
              <div className="card-body">
                {
                  // if books has a length
                  this.state.books.length ? (
                    <ul className="list-group">
                      {this.state.books.map((book) => (
                        <GoogleBooks
                          key={book.id}
                          title={book.volumeInfo.title}
                          subtitle={book.volumeInfo.subtitle}
                          link={book.volumeInfo.infoLink}
                          authors={book.volumeInfo.authors.join(", ")}
                          description={book.volumeInfo.description}
                          image={book.volumeInfo.imageLinks.thumbnail}
                          Button={() => (
                            <button
                              onClick={() => this.handleBookSave(book.id)}
                              className="btn btn-primary ml-2"
                            >
                              Save
                            </button>
                          )}
                        />
                      ))}
                    </ul>
                  ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
