import axios from 'axios';
import { GET_BOOKS, ADD_BOOK } from '../actions/types';

export const getBooks = () => dispatch => {
    axios.get('/api/books').then(res => {
        console.log(res.data);
        dispatch({
            type: GET_BOOKS,
            payload: res.data,
        });
    });
};

export const addBook = newBook => dispatch => {
    axios.post('/api/books', newBook).then(res => {
        dispatch({
            type: ADD_BOOK,
            payload: newBook,
        });
    });
};
