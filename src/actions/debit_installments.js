import base from '../apis/base';
import {
    CREATE_DEBIT_INSTALLMENT,
    EDIT_DEBIT_INSTALLMENT,
    FETCH_DEBIT_INSTALLMENTS,
    FETCH_DEBIT_INSTALLMENT,
    DELETE_DEBIT_INSTALLMENT,
    LOGOUT
} from './types';
import history from '../histoty';
import { get } from 'lodash';
import authService from '../services/auth/auth.service';
import authHeader from '../services/auth/auth-header';

export const fetchDebitInstallments = () => async dispath => {
    try {
        const response = await base.get('/debit_installments', { headers: authHeader() });
        dispath({ type: FETCH_DEBIT_INSTALLMENTS, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispath({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const fetchDebitInstallment = (id) => async dispatch => {
    try {
        const response = await base.get(`/debit_installments/${id}`, { headers: authHeader() });
        dispatch({ type: FETCH_DEBIT_INSTALLMENT, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const createDebitInstallment = (formValues) => async dispatch => {
    try {
        const response = await base.post('/debit_installments', formValues, { headers: authHeader() });
        dispatch({ type: CREATE_DEBIT_INSTALLMENT, payload: response.data });
        history.push('/debit_installments/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const editDebitInstallment = (id, formValues) => async dispatch => {
    try {
        const response = await base.put(`/debit_installments/${id}`, formValues, { headers: authHeader() });
        dispatch({ type: EDIT_DEBIT_INSTALLMENT, payload: response.data });
        history.push('/debit_installments/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const deleteDebitInstallment = (id) => async dispatch => {
    try {
        const response = await base.delete(`/debit_installments/${id}`, { headers: authHeader() });
        dispatch({ type: DELETE_DEBIT_INSTALLMENT, payload: { id } });
        history.push('/debit_installments/list');
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}