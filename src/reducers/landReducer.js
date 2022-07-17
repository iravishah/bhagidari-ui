import { mapKeys } from 'lodash';
import {
    FETCH_LANDS
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LANDS:
            return { ...state, ...mapKeys(action.payload, 'uid') }
        default:
            return state;
    }
}