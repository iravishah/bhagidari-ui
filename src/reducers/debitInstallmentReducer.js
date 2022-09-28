import { mapKeys, omit } from "lodash";
import {
    CREATE_DEBIT_INSTALLMENT,
    EDIT_DEBIT_INSTALLMENT,
    FETCH_DEBIT_INSTALLMENT,
    FETCH_DEBIT_INSTALLMENTS,
    DELETE_DEBIT_INSTALLMENT
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_DEBIT_INSTALLMENT:
            return { ...state, [action.payload.uid]: action.payload };
        case FETCH_DEBIT_INSTALLMENT:
            return { ...state, [action.payload.uid]: action.payload };
        case EDIT_DEBIT_INSTALLMENT:
            return { ...state, [action.payload.uid]: action.payload };
        case DELETE_DEBIT_INSTALLMENT:
            state = omit(state, action.payload.id);
            return { ...state };
        case FETCH_DEBIT_INSTALLMENTS:
            return { ...state, ...mapKeys(action.payload, 'uid') };
        default:
            return state;
    }
}