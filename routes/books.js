const router = require('express').Router();
const verifyRoute = require('./verifyToken');
const Book = require('../models/Book');
const { check, validationResult } = require('express-validator');

router.get('/', verifyRoute, async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post(
    '/',
    verifyRoute,
    [
        check('isbn', 'This field is required')
            .not()
            .isEmpty(),
        check('title', 'This field is required')
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        // check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // create new book
        const book = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
        });

        // save new book to DB
        try {
            const newBook = await book.save();
            res.send(newBook);
        } catch (err) {
            res.status(400).send(err);
        }
    }
);

module.exports = router;
