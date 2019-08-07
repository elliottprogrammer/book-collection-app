import { GET_BOOKS, ADD_BOOK } from '../actions/types';

const bookReducer = (state = [], action) => {
    switch (action.type) {
        case GET_BOOKS:
            return action.payload;
        case ADD_BOOK:
            const bookList = [...state];
            bookList.push(action.payload);
            return bookList;
        default:
            return state;
    }
};

export default bookReducer;
