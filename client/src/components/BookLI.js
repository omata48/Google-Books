import React from 'react';

function BookLI() {
    <li key={book.id}>
        <div className='row'>
            <div className='col-md-8'>
                <h3>book.volumeInfo.title</h3>
                {book.volumeInfo.subtitle && <h5>{book.volumeInfo.subtitle}</h5>}
            </div>
            <div className='col-md-4'>
                <div className='btn-container'>
                    <a className='btn btn-light' target='_blank' rel='noopener noreferrer' href={book.volumeInfo.infoLink}>
                        View
                                                                </a>
                    <button onClick={() => this.handleBookSave(book.id)} className='btn btn-primary ml-2'>
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
}

export default BookLI