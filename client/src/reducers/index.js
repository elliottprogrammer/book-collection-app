/**
 * rootReducer
 */
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookReducer from './bookReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    user: userReducer,
    books: bookReducer,
    errors: errorReducer,
});

export default rootReducer;
