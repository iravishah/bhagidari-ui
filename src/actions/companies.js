import { get } from 'lodash';

import base from '../apis/base';
import {
    FETCH_COMPANIES,
    CREATE_COMPANY,
    FETCH_COMPANY,
    EDIT_COMPANY,
    LOGOUT,
    FETCH_COMPANY_PARTNERS
} from './types'
import history from '../histoty';
import authHeader from '../services/auth/auth-header';
import authService from '../services/auth/auth.service';

export const fetchCompanies = () => async dispatch => {
    try {
        const response = await base.get('/companies', { headers: authHeader() });
        dispatch({ type: FETCH_COMPANIES, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT })
            authService.logout();
            history.push('/login');
        }
    }
}

export const fetchCompany = (id) => async dispatch => {
    try {
        const response = await base.get(`/companies/${id}`, { headers: authHeader() });
        dispatch({ type: FETCH_COMPANY, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const createCompany = (formValues) => async dispatch => {
    try {
        const response = await base.post('/companies', formValues, { headers: authHeader() });
        dispatch({ type: CREATE_COMPANY, payload: response.data });
        history.push("/companies/list");
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const editCompany = (id, formValues) => async dispatch => {
    try {
        const response = await base.put(`/companies/${id}`, formValues, { headers: authHeader() });
        dispatch({ type: EDIT_COMPANY, payload: response.data });
        history.push("/companies/list");
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}

export const fetchCompanyPartners = (id) => async dispatch => {
    try {
        const response = await base.get(`/companies/${id}/partners`, { headers: authHeader() });
        dispatch({ type: FETCH_COMPANY_PARTNERS, payload: response.data });
    } catch (e) {
        if (get(e, 'response.data.statusCode') === 401) {
            dispatch({ type: LOGOUT });
            authService.logout();
            history.push('/login');
        }
    }
}