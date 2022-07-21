import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import landReducer from './landReducer';
import companyReducer from './companyReducer';
import partnerReducer from './partnerReducer';
import authReducer from './authReducer';
import companyPartnerreducer from './companyPartnersReducer';

export default combineReducers({
    lands: landReducer,
    companies: companyReducer,
    partners: partnerReducer,
    form: formReducer,
    auth: authReducer,
    companyPartners: companyPartnerreducer
});