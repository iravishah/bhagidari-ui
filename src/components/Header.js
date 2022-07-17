import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
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
                <Link to="/" className="item">
                    Logout
                </Link>
            </div>
        </div>
    )
}

export default Header;