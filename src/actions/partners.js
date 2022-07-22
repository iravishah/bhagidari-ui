import { get } from 'lodash';

import base from '../apis/base';
import {
    FETCH_PARTNERS,
    CREATE_PARTNER,
    LOGOUT
} from './types';
import authHeader from '../services/auth/auth-header';
import authService from '../services/auth/auth.service';
import history from '../histoty';

export const fetchPartners = () => async dispatch => {
    const response = await base.get('/partners', { headers: authHeader() });
    dispatch({ type: FETCH_PARTNERS, payload: response.data })
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