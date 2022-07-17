import base from '../apis/base';
import {
    FETCH_LANDS
} from './types'

export const fetchLands = () => async dispatch => {
    const response = await base.get('/lands');
    dispatch({ type: FETCH_LANDS, payload: response.data });
}