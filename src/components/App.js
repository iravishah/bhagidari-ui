import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import Login from './Login/Login';
import history from '../histoty';
import Routes from './Routes';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <div>
                    <Route path="/login" exact component={Login} /> 
                    <Routes />
                </div>
            </Router>
        </div>
    )
}

export default App;