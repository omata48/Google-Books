import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleBookDelete = id => {
        API.deleteBook(id)
            .then(res =>
                this.getSavedBooks()
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Jumbotron />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card my-4'>
                            <div className='card-header'>
                                <h3><i className={'fa fa-download'} /> Saved Books</h3>
                            </div>
                            {
                                this.state.books.length
                                    ? (
                                        <ul className='list-group'>
                                            {this.state.books.map(book => (
                                                <li key={book._id} className='list-group-item'>
                                                    <div className='row'>
                                                        <div className='col-md-8'>
                                                            <h3>{book.title}</h3>
                                                            {book.subtitle && <h5>{book.subtitle}</h5>}
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div className='btn-container'>
                                                                <a className='btn btn-light' target='_blank' rel='noopener noreferrer' href={book.link}>
                                                                    View
                                                                </a>
                                                                <button onClick={() => this.handleBookDelete(book._id)} className='btn btn-danger ml-2'>
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <p>Written by {book.authors.join(', ')} </p>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-12 col-sm-4 col-md-2'>
                                                            <img className='img-thumbnail img-fluid w-100' src={book.image} alt={book.title} />
                                                        </div>
                                                        <div className='col-12 col-sm-8 col-md-10'>
                                                            <p>{book.description}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                    : (
                                        <h2 className='text-center'>No Saved Books!</h2>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved