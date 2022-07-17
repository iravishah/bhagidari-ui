import base from '../apis/base';
import {
    FETCH_PARTNERS
} from './types';

export const fetchPartners = () => async dispatch => {
    const response = await base.get('/parteners');
    dispatch({ type: FETCH_PARTNERS, payload: response.data })
}