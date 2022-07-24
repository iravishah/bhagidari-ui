import { mapKeys, omit } from 'lodash';
import {
    CREATE_LAND,
    FETCH_LAND,
    EDIT_LAND,
    FETCH_LANDS,
    DELETE_LAND
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_LAND:
            return { ...state, [action.payload.uid]: action.payload }
        case EDIT_LAND:
            return { ...state, [action.payload.uid]: action.payload }
        case FETCH_LAND:
            return { ...state, [action.payload.uid]: action.payload }
        case DELETE_LAND:
            state = omit(state, action.payload.id);
            return { ...state }
        case FETCH_LANDS:
            return { ...state, ...mapKeys(action.payload, 'uid') }
        default:
            return state;
    }
}