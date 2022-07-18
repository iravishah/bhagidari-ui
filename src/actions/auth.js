import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types';

import AuthService from '../services/auth/auth.service';
import history from '../histoty';

export const login = (username, password) => async dispatch => {
    const response = await AuthService.login(username, password);
    if (response instanceof Error) {
        return dispatch({ type: LOGIN_FAIL });
    }
    dispatch({ type: LOGIN_SUCCESS, payload: response });
    history.push('/');
}

export const logout = () => dispatch => {
    AuthService.logout();
    dispatch({ type: LOGOUT });
    history.push('/login');
}