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
            <div className="item" onClick={this.handleLogout}>
                Logout
            </div>
        )
    }
}

export default connect(null, { logout })(Logout);