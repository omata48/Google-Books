const axios = require('axios');
const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        const { query: params } = req;
        axios.get('https://www.googleapis.com/books/v1/volumes', { params })
            .then(results =>
                //filter each results to have information
                results.data.items.filter(
                    result =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(googleBooks =>
                db.Book.find().then(books =>
                    googleBooks.filter(googleBook =>
                        books.every(book => book.googleId.toString() !== googleBook.id)
                    )
                )
            )
            .then(booksToSend => res.json(booksToSend))
            .catch(err => res.status(422).json(err));
    }
};