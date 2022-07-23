import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    SET_MESSAGE,
    CLEAR_MESSAGE
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, token: action.payload }
        case LOGOUT:
        case LOGIN_FAIL:
            return { ...state, isLoggedIn: false, token: null }
        case SET_MESSAGE:
            return { ...state, message: action.payload.message }
        case CLEAR_MESSAGE:
            return { ...state, message: '' }
        default:
            return state;
    }
}