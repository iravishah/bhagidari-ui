import { get } from 'lodash';

import base from '../apis/base';

import {
    FETCH_SHARES,
    FETCH_SHARE,
    CREATE_SHARE,
    EDIT_SHARE,
    LOGOUT
} from './types'

import history from '../histoty';
import authHeader from '../services/auth/auth-header';
import authService from '../services/auth/auth.service';

export const fetchShares = () => async dispatch => {
    try {
        const response = await base.get('/shares', { headers: authHeader() });
        dispatch({ type: FETCH_SHARES, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }
}

export const fetchShare = (id) => async dispatch => {
    try {
        const response = await base.get(`/shares/${id}`, { headers: authHeader() });
        dispatch({ type: FETCH_SHARE, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }
}

export const createShare = (formValues) => async dispatch => {
    try {
        const response = await base.post(`/shares`, formValues, { headers: authHeader() });
        dispatch({ type: CREATE_SHARE, payload: response.data });
        history.push("/shares/list");
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }
}

export const editShare = (id, formValues) => async dispatch => {
    try {
        const response = await base.put(`/shares/${id}`, formValues, { headers: authHeader() });
        dispatch({ type: EDIT_SHARE, payload: response.data });
        history.push("/shares/list");
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }
}