import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log(action);
            return { ...state, isLoggedIn: true, token: action.payload }
        case LOGOUT:
        case LOGIN_FAIL:
            return { ...state, isLoggedIn: false, token: null }
        default:
            return state;
    }
}