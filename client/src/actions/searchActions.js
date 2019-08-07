import axios from 'axios';
import isEmpty from '../utils/isEmpty';
import { SET_BOOK_SEARCH } from '../actions/types';

export const isbnSearch = isbn => dispatch => {
    axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(res => {
            if (res.data.totalItems) {
                console.log(res.data);
                const bookInfo = {};
                const authorName = res.data.items[0].volumeInfo.authors[0].split(' ');
                const [author_first_name, author_last_name] = [
                    authorName[0],
                    authorName[authorName.length - 1],
                ];
                if (!isEmpty(author_first_name)) bookInfo.author_first_name = author_first_name;
                if (!isEmpty(author_last_name)) bookInfo.author_last_name = author_last_name;
                if (!isEmpty(res.data.items[0].volumeInfo.title))
                    bookInfo.title = res.data.items[0].volumeInfo.title;
                if (!isEmpty(res.data.items[0].volumeInfo.imageLinks.thumbnail))
                    bookInfo.cover_image_url = res.data.items[0].volumeInfo.imageLinks.thumbnail;
                if (isEmpty(bookInfo)) return;

                dispatch({
                    type: SET_BOOK_SEARCH,
                    payload: bookInfo,
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
};
