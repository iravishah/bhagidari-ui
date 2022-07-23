import { mapKeys } from 'lodash';
import {
    FETCH_COMPANY_PARTNERS
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_COMPANY_PARTNERS:
            return { ...state, ...mapKeys(action.payload, 'uid') }
        default:
            return state;
    }
}