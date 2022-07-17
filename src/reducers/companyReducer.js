import { mapKeys } from 'lodash';
import {
    CREATE_COMPANY,
    FETCH_COMPANIES,
    FETCH_COMPANY,
    EDIT_COMPANY
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_COMPANY:
            return { ...state, [action.payload.uid]: action.payload }
        case EDIT_COMPANY:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_COMPANY:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_COMPANIES:
            return { ...state, ...mapKeys(action.payload, 'uid') }
        default:
            return state;
    }
}