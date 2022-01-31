import { login, logout } from '../services/firebase';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>People App</div>
            </Link>
            <ul>
                <li onClick={login}>Login</li>
                <li onClick={logout}>Logout</li>
            </ul>
        </nav>
    );
}

export default Header;