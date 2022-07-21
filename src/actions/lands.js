import { get } from 'lodash';

import base from '../apis/base';
import {
    FETCH_LANDS, LOGOUT
} from './types';
import authHeader from '../services/auth/auth-header';
import authService from '../services/auth/auth-header';
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