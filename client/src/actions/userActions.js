import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Login User
export const loginUser = userData => dispatch => {
    axios
        .post('/api/user/login', userData)
        .then(res => {
            // save token to local storage
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            // set token to auth header
            setAuthToken(token);
            // decode token to get user data
            const decoded = jwt_decode(token);
            // set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};

// set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};

// logout user
export const logoutUser = () => dispatch => {
    // remove token from storage
    localStorage.removeItem('jwtToken');
    // remove auth header
    setAuthToken(false);
    // set current user to empty {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
