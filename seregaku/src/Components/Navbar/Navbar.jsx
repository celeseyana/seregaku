import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <span className="navbar-item has-text-weight-bold has-text-white is-size-4 noto-sans-jp ml-4">
                    セレ学
                </span>
            </div>

            <div className="navbar-menu noto-sans is-active">
                <div className="navbar-start ml-5">
                    <Link to="/" className="navbar-item has-text-weight-medium has-text-white">Home</Link>
                    <Link to="/dictionary" className="navbar-item has-text-weight-medium has-text-white">Dictionary</Link>
                    <Link to="/grammar" className="navbar-item has-text-weight-medium has-text-white">Grammar</Link>
                    <Link to="/tracker" className="navbar-item has-text-weight-medium has-text-white">Progress Tracker</Link>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="navbar-item is-justify-content-center is-align-items-center has-text-white mr-4 login-button">
                        <span>Login</span>
                        <FontAwesomeIcon icon={faRightToBracket} className='login-icon' />
                    </Link>
                </div>
            </div>
        </nav>
    );
}