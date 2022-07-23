import { get } from 'lodash';

import base from '../apis/base';
import {
    FETCH_PARTNERS,
    FETCH_PARTNER,
    CREATE_PARTNER,
    EDIT_PARTNER,
    LOGOUT
} from './types';
import authHeader from '../services/auth/auth-header';
import authService from '../services/auth/auth.service';
import history from '../histoty';

export const fetchPartners = () => async dispatch => {
    try {
        const response = await base.get('/partners', { headers: authHeader() });
        dispatch({ type: FETCH_PARTNERS, payload: response.data })
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }
}

export const fetchPartner = (id) => async dispatch => {
    try {
        const response = await base.get(`/partners/${id}`, { headers: authHeader() });
        dispatch({ type: FETCH_PARTNER, payload: response.data })
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }

}

export const createPartner = (formValues) => async dispatch => {
    try {
        const response = await base.post('/partners', formValues, { headers: authHeader() });
        dispatch({ type: CREATE_PARTNER, payload: response.data });
        history.push('/partners/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }
}

export const editPartner = (id, formValues) => async dispatch => {
    try {
        const response = await base.put(`/partners/${id}`, formValues, { headers: authHeader() });
        dispatch({ type: EDIT_PARTNER, payload: response.data });
        history.push('/partners/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }
}