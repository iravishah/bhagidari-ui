import base from '../apis/base';
import {
    FETCH_COMPANIES,
    CREATE_COMPANY,
    FETCH_COMPANY,
    EDIT_COMPANY
} from './types'
import history from '../histoty';

export const fetchCompanies = () => async dispatch => {
    const response = await base.get('/companies');
    dispatch({ type: FETCH_COMPANIES, payload: response.data });
}

export const fetchCompany = (id) => async dispatch => {
    const response = await base.get(`/companies/${id}`);
    dispatch({ type: FETCH_COMPANY, payload: response.data });
}

export const createCompany = (formValues) => async dispatch => {
    const response = await base.post('/companies', formValues);
    dispatch({ type: CREATE_COMPANY, payload: response.data });
    history.push("/companies/list");
}

export const editCompany = (id, formValues) => async dispatch => {
    const response = await base.put(`/companies/${id}`, formValues);
    dispatch({ type: EDIT_COMPANY, payload: response.data });
    history.push("/companies/list");
}