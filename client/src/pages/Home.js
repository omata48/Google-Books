import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
// import BookLI from '../components/BookLI';
import API from '../utils/API'

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search For A Book To Begin!"
    };

    handleInputChange = event => {
        // name value give abstraction to function
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() => 
                this.setState({
                    books: [],
                    message: 'No books found with that search!'
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        // find matching id from list in state w/ id passed
        const book = this.state.books.find(book => book.id === id);

        // title, link, authors, desc, imagelink, googleID
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12' >
                        <Jumbotron />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12' >
                        <div className='card mt-4'>
                            <div className='card-header'>
                                <h3><i className={'fa fa-far fa-book'} /> Book Search</h3>
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label htmlFor='query'>Book</label>
                                        <input className='form-control' id='title' value={this.state.q} 
                                            type='text' placeholder='Harry Potter'
                                            name='q' onChange={this.handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className='pull-right'>
                                        <button onClick={this.handleFormSubmit} type='submit' className='btn btn-lg float-right'>
                                            Search
                                        </button>
                                    </div>
                                </form>                     
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12' >
                        <div className='card my-4'>
                            <div className='card-header'>
                                <h3>Results</h3>
                            </div>
                            <div className='card-body'>
                                {
                                    // if books has a length
                                    this.state.books.length
                                    ? (
                                        <ul className='list-group'>
                                            {this.state.books.map(book => (
                                                <li key={book.id} className='list-group-item'>
                                                    <div className='row'>
                                                        <div className='col-md-8'>
                                                            <h3>{book.volumeInfo.title}</h3>
                                                            {book.volumeInfo.subtitle && <h5>{book.volumeInfo.subtitle}</h5>}
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div className='btn-container'>
                                                                <a className='btn btn-light' target='_blank' rel='noopener noreferrer' href={book.volumeInfo.infoLink}>
                                                                    View
                                                                </a>
                                                                <button onClick={()=> this.handleBookSave(book.id)} className='btn btn-primary ml-2'>
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <p>Written by {book.volumeInfo.authors.join(', ')} </p>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-12 col-sm-4 col-md-2'>
                                                            <img className='img-thumbnail img-fluid w-100' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                                        </div>
                                                        <div className='col-12 col-sm-8 col-md-10'>
                                                            <p>{book.volumeInfo.description}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                    : (
                                        <h2>{this.state.message}</h2>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;