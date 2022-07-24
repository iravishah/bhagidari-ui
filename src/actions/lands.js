import { get } from 'lodash';

import base from '../apis/base';
import {
    FETCH_LANDS,
    FETCH_LAND,
    CREATE_LAND,
    EDIT_LAND,
    LOGOUT,
    DELETE_LAND
} from './types';
import authHeader from '../services/auth/auth-header';
import authService from '../services/auth/auth.service';
import history from '../histoty';

export const fetchLands = () => async dispatch => {
    try {
        const response = await base.get('/lands', { headers: authHeader() });
        dispatch({ type: FETCH_LANDS, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const fetchLand = (id) => async dispatch => {
    try {
        const response = await base.get(`/lands/${id}`, { headers: authHeader() });
        dispatch({ type: FETCH_LAND, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const createLand = (formValues) => async dispatch => {
    try {
        const response = await base.post(`/lands`, formValues, { headers: authHeader() });
        dispatch({ type: CREATE_LAND, payload: response.data });
        history.push('/lands/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const editLand = (id, formValues) => async dispatch => {
    try {
        const response = await base.put(`/lands/${id}`, formValues, { headers: authHeader() });
        dispatch({ type: EDIT_LAND, payload: response.data });
        history.push('/lands/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const deleteLand = (id) => async dispatch => {
    try {
        const response = await base.delete(`/lands/${id}`, { headers: authHeader() });
        dispatch({ type: DELETE_LAND, payload: { id } });
        history.push('/lands/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}