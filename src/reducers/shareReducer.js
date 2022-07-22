import { mapKeys } from 'lodash';
import {
    CREATE_SHARE,
    EDIT_SHARE,
    FETCH_SHARE,
    FETCH_SHARES
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_SHARE:
            return { ...state, [action.payload.uid]: action.payload }
        case EDIT_SHARE:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_SHARE:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_SHARES:
            return { ...state, ...mapKeys(action.payload, 'uid') }
        default:
            return state;
    }
}