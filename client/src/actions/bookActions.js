import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, GET_ERRORS, SEARCH_FILTER_BOOKS } from '../actions/types';

export const getBooks = () => dispatch => {
    axios.get('/api/books').then(res => {
        dispatch({
            type: GET_BOOKS,
            payload: res.data,
        });
    });
};

export const addBook = (newBook, history) => dispatch => {
    axios
        .post('/api/books', newBook)
        .then(res => {
            dispatch({
                type: ADD_BOOK,
                payload: res.data,
            });
            history.push('/');
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

export const filterBooks = filterVals => dispatch => {
    axios.get('/api/books').then(res => {
        dispatch({
            type: SEARCH_FILTER_BOOKS,
            payload: { books: res.data, filterVals: filterVals },
        });
    });
};
