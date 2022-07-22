import { mapKeys } from 'lodash';
import {
    EDIT_PARTNER,
    FETCH_PARTNERS,
    FETCH_PARTNER
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case EDIT_PARTNER:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_PARTNER:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_PARTNERS:
            return { ...state, ...mapKeys(action.payload, 'uid') }
        default:
            return state;
    }
}