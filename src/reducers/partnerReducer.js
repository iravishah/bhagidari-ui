import { mapKeys, omit } from 'lodash';
import {
    CREATE_PARTNER,
    EDIT_PARTNER,
    FETCH_PARTNERS,
    FETCH_PARTNER,
    DELETE_PARTNER
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_PARTNER:
            return { ...state, [action.payload.uid]: action.payload }
        case EDIT_PARTNER:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_PARTNER:
            return { ...state, [action.payload.uid]: action.payload }
        case DELETE_PARTNER:
            state = omit(state, action.payload.id);
            return { ...state };
        case FETCH_PARTNERS:
            return { ...state, ...mapKeys(action.payload, 'uid') }
        default:
            return state;
    }
}