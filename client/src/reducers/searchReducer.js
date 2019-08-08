import { SET_BOOK_SEARCH } from '../actions/types';

const initialState = {
    title: '',
    author_first_name: '',
    author_last_name: '',
    cover_image_url: '',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_BOOK_SEARCH:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
