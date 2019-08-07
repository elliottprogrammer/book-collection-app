import axios from 'axios';
import isEmpty from '../utils/isEmpty';
import { ADD_BOOK } from '../actions/types';

export const addBook = newBook => dispatch => {
    axios.post('/api/books', newBook).then(res => {
        dispatch({
            type: ADD_BOOK,
            payload: newBook,
        });
    });
};
