import base from '../apis/base';
import {
    CREATE_INSTALLMENT,
    EDIT_INSTALLMENT,
    FETCH_INSTALLMENT,
    FETCH_INSTALLMENTS,
    DELETE_INSTALLMENT,
    LOGOUT
} from './types';
import history from '../histoty';
import { get } from 'lodash';
import authService from '../services/auth/auth.service';
import authHeader from '../services/auth/auth-header';

export const fetchInstallments = () => async dispath => {
    try {
        const response = await base.get('/installments', { headers: authHeader() });
        dispath({ type: FETCH_INSTALLMENTS, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispath({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const fetchInstallment = (id) => async dispatch => {
    try {
        const response = await base.get(`/installments/${id}`, { headers: authHeader() });
        dispatch({ type: FETCH_INSTALLMENT, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const createInstallment = (formValues) => async dispatch => {
    try {
        const response = await base.post('/installments', formValues, { headers: authHeader() });
        dispatch({ type: CREATE_INSTALLMENT, payload: response.data });
        history.push('/installments/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const editInstallment = (id, formValues) => async dispatch => {
    try {
        const response = await base.put(`/installments/${id}`, formValues, { headers: authHeader() });
        dispatch({ type: EDIT_INSTALLMENT, payload: response.data });
        history.push('/installments/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const deleteInstallment = (id) => async dispatch => {
    try {
        const response = await base.delete(`/installments/${id}`, { headers: authHeader() });
        dispatch({ type: DELETE_INSTALLMENT, payload: { id } });
        history.push('/installments/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}