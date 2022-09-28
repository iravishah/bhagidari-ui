import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    CLEAR_MESSAGE
} from '../actions/types';

import AuthService from '../services/auth/auth.service';
import history from '../histoty';

export const login = (username, password) => async dispatch => {
    const response = await AuthService.login(username, password);
    if (response instanceof Error) {
        dispatch({ type: LOGIN_FAIL, payload: null, errorMsg: 'Invalid username or password' });
        // dispatch({ type: SET_MESSAGE, payload: response.response.data });
        return;
    }
    dispatch({ type: LOGIN_SUCCESS, payload: response, errorMsg: null });
    // dispatch({ type: CLEAR_MESSAGE });
    history.push('/');
}

export const logout = () => dispatch => {
    AuthService.logout();
    dispatch({ type: LOGOUT });
    history.push('/login');
}