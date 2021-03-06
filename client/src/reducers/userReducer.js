import isEmpty from '../utils/isEmpty';
import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: !isEmpty(action.payload),
            };
        default:
            return state;
    }
}
