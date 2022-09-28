import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import landReducer from './landReducer';
import companyReducer from './companyReducer';
import partnerReducer from './partnerReducer';
import authReducer from './authReducer';
import shareReducer from './shareReducer';
import installmentReducer from './installmentReducer';
import debitInstallmentReducer from './debitInstallmentReducer';
import messageReducer from './messageReducer';

export default combineReducers({
    lands: landReducer,
    companies: companyReducer,
    partners: partnerReducer,
    form: formReducer,
    auth: authReducer,
    shares: shareReducer,
    installments: installmentReducer,
    debit_installments: debitInstallmentReducer,
    message: messageReducer
});