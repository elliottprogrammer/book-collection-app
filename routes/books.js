const router = require('express').Router();
const verifyRoute = require('./verifyToken');
const Book = require('../models/Book');
const { check, validationResult } = require('express-validator');
const saveImage = require('../utils/saveImage');

const myValidationResult = validationResult.withDefaults({
    formatter: error => {
        return {
            [error.param]: error.msg,
        };
    },
});

router.get('/', verifyRoute, async (req, res) => {
    try {
        const books = await Book.find().sort({ date_added: -1 });
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
        check('author_first_name', 'This field is required')
            .not()
            .isEmpty(),
        check('author_last_name', 'This field is required')
            .not()
            .isEmpty(),
    ],
    async (req, res) => {
        // check for validation errors
        const errors = myValidationResult(req);
        if (!errors.isEmpty()) {
            // reduce error array into simple error object
            const errorResult = errors.array().reduce((accum, err) => {
                accum[Object.keys(err)[0]] = err[Object.keys(err)[0]];
                return accum;
            }, {});
            return res.status(400).json(errorResult);
        }

        // create new book
        const book = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
            author_first_name: req.body.author_first_name,
            author_last_name: req.body.author_last_name,
            genre: req.body.genre,
            cover_image_url: req.body.cover_image_url,
            language: req.body.language,
            borrowed_out: req.body.borrowed_out,
            borrower_name: req.body.borrower_name,
            borrow_date: req.body.borrow_date,
            user_id: req.body.user_id,
        });

        console.log(req.body.cover_image_url);
        if (req.body.cover_image_url) {
            console.log('saving image');
            await saveImage(req.body.cover_image_url, book.isbn + '.jpg', () => {
                console.log('image saved...');
            });
        }

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
