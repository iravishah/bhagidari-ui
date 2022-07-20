import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { logout } from '../../actions/auth'

class Logout extends React.Component {

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <Link to="/login" className="item" onClick={this.handleLogout}>
                Logout
            </Link>
        )
    }
}

export default connect(null, { logout })(Logout);