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
    // author_first_name: {
    //     type: String,
    //     required: true,
    // },
    // author_last_name: {
    //     type: String,
    //     required: true,
    // },
    // genre: {
    //     type: [String],
    // },
    // read: {
    //     type: Boolean,
    //     default: false,
    // },
    // language: {
    //     type: String,
    //     default: 'English',
    // },
});

module.exports = mongoose.model('Book', bookSchema);
