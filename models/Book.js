const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author_first_name: {
        type: String,
        required: true,
    },
    author_last_name: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
    },
    cover_image: {
        type: String,
    },
    read: {
        type: String,
        default: 'No',
    },
    language: {
        type: String,
        default: 'English',
    },
    borrowed_out: {
        type: String,
        default: 'No',
    },
    borrower_name: {
        type: String,
    },
    borrow_date: {
        type: Date,
    },
    user_id: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Book', bookSchema);
