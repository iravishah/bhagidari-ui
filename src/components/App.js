import React from 'react';
import { Router, Route } from 'react-router-dom';

import LandList from './Land/LandList';

import Header from './Header';
import CompanyList from './Company/CompanyList';
import PartnersList from './Partener/PartenerList';
import CompanyCreate from './Company/CompanyCreate';
import CompanyEdit from './Company/CompanyEdit';
import Login from './Login/Login';
import history from '../histoty';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <div>
                    <Route path="/" exact component={LandList} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/lands/list" exact component={LandList} />
                    <Route path="/companies/list" exact component={CompanyList} />
                    <Route path="/companies/create" exact component={CompanyCreate} />
                    <Route path="/companies/edit/:id" exact component={CompanyEdit} />
                    <Route path="/partners/list" exact component={PartnersList} />
                </div>
            </Router>
        </div>
    )
}

export default App;