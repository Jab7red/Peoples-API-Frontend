import { login, logout } from '../services/firebase';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>People App</div>
            </Link>
            <ul>
                {
                    props.user ?
                        <>
                            <li>Welcome, {props.user.displayName}</li>
                            <li>
                                <img src={props.user.photoURL}
                                     alt={props.user.displayName}
                                />
                            </li>
                            <li onClick={logout}>Logout</li>
                        </>
                        :
                        <li onClick={login}>Login</li>
                }
            </ul>
        </nav>
    );
}

export default Header;