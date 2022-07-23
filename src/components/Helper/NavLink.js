import { Link } from 'react-router-dom';

const NavLink = ({ to, buttonName, className }) => {
    return (
        <Link to={to} className={className}>
            {buttonName}
        </Link>
    )
}

export default NavLink;