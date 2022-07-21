import React from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import CompanyList from './Company/CompanyList';
import PartnersList from './Partener/PartenerList';
import PartenerCreate from './Partener/PartenerCreate';
import CompanyCreate from './Company/CompanyCreate';
import CompanyEdit from './Company/CompanyEdit';
import LandList from './Land/LandList';
import {
    LOGIN_SUCCESS
} from '../actions/types';
import history from '../histoty';
import CompanyView from './Company/ComanyView';

class Routes extends React.Component {
    componentDidMount() {
        let token = localStorage.getItem('token');
        if (token) {
            token = JSON.parse(token);
            const { dispatch } = this.props;
            return dispatch({ type: LOGIN_SUCCESS, payload: { isLoggedIn: true, token } });
        } else {
            history.push('/login');
        }
    }

    render() {
        if (!this.props.isLoggedIn) {
            return null;
        }
        return (
            <div>
                <Route path="/" exact component={LandList} />
                <Route path="/lands/list" exact component={LandList} />
                <Route path="/companies/list" exact component={CompanyList} />
                <Route path="/companies/create" exact component={CompanyCreate} />
                <Route path="/companies/:id/edit" exact component={CompanyEdit} />
                <Route path="/companies/:id/view" exact component={CompanyView} />
                <Route path="/partners/list" exact component={PartnersList} />
                <Route path="/partners/create" exact component={PartenerCreate} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(Routes);