import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logout from './Logout/Logout';

class Header extends React.Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <div className="ui secondary pointing menu" >
                    <Link to="/" className="item">
                        Bhagidari
                    </Link>
                    <div className="right menu">
                        <Link to="/" className="item">
                            Lands
                        </Link>
                        <Link to="/companies/list" className="item">
                            Companies
                        </Link>
                        <Link to="/partners/list" className="item">
                            Parteners
                        </Link>
                        <Link to="/shares/list" className="item">
                            Investor Shares
                        </Link>
                        <Logout />
                    </div>
                </div>
            )
        }
        return (
            <div className="ui secondary pointing menu" >
                <Link to="/" className="item">
                    Bhagidari
                </Link>
                <div className="right menu">
                    <Link to="/login" className="item">
                        LogIn
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(Header);