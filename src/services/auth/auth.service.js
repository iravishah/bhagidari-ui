import { get } from 'lodash';

import base from '../../apis/base';

const login = async (username, password) => {
    try {
        const response = await base.post('/login', { username, password });
        if (get(response, 'data.access_token')) {
            localStorage.setItem('token', JSON.stringify(response.data));
        }
        return response.data;
    } catch (e) {
        return e;
    }
};

const logout = () => {
    localStorage.removeItem('token');
}

export default {
    login,
    logout
}