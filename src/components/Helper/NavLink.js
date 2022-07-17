import { Link } from 'react-router-dom';

const NavLink = ({ to, buttonName, className }) => {
    return (
        <div style={{ textAlign: 'right' }}>
            <Link to={to} className={className}>
                {buttonName}
            </Link>
        </div>
    )
}

export default NavLink;