import { mapKeys, omit } from 'lodash';
import {
    CREATE_COMPANY,
    FETCH_COMPANIES,
    FETCH_COMPANY,
    EDIT_COMPANY,
    DELETE_COMPANY
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_COMPANY:
            return { ...state, [action.payload.uid]: action.payload }
        case EDIT_COMPANY:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_COMPANY:
            return { ...state, [action.payload.uid]: action.payload }
        case DELETE_COMPANY:
            state = omit(state, action.payload.id);
            return { ...state }
        case FETCH_COMPANIES:
            return { ...state, ...mapKeys(action.payload, 'uid') }
        default:
            return state;
    }
}