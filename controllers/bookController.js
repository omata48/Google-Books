const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query)
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Book.findById(req.params.id)
            .then(bookById => res.json(bookById))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Book.create(req.body)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(updatedBook => res.json(updatedBook))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        //check if it exists
        db.Book.findById(req.params.id)
            .then(bookFound => bookFound.remove())
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    }
};