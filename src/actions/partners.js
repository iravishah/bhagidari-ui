import base from '../apis/base';
import {
    FETCH_PARTNERS,
    CREATE_PARTNER
} from './types';
import authHeader from '../services/auth/auth-header';
import history from '../histoty';

export const fetchPartners = () => async dispatch => {
    const response = await base.get('/parteners', { headers: authHeader() });
    dispatch({ type: FETCH_PARTNERS, payload: response.data })
}

export const createPartner = (formValues) => async dispatch => {
    const response = await base.post('/parteners', formValues, { headers: authHeader() });
    dispatch({ type: CREATE_PARTNER, payload: response.data });
    history.push('/partners/list');

}