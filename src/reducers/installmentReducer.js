import { mapKeys } from "lodash";
import {
    CREATE_INSTALLMENT,
    EDIT_INSTALLMENT,
    FETCH_INSTALLMENT,
    FETCH_INSTALLMENTS
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_INSTALLMENT:
            return { ...state, [action.payload.uid]: action.payload };
        case FETCH_INSTALLMENT:
            return { ...state, [action.payload.uid]: action.payload };
        case EDIT_INSTALLMENT:
            return { ...state, [action.payload.uid]: action.payload };
        case FETCH_INSTALLMENTS:
            return { ...state, ...mapKeys(action.payload, 'uid') };
        default:
            return state;
    }
}