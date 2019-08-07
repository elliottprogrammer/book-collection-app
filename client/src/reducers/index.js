/**
 * rootReducer
 */
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookReducer from './bookReducer';
import errorReducer from './errorReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    user: userReducer,
    books: bookReducer,
    searchResult: searchReducer,
    errors: errorReducer,
});

export default rootReducer;
