import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link to="/" class="navbar-item has-text-weight-bold has-text-white is-size-4 noto-sans-jp ml-4">
                セレ学
                </Link>
            </div>

            <div class="navbar-menu is-active">
                <div class="navbar-start noto-sans ml-5">
                    <Link to="/" class="navbar-item has-text-weight-bold has-text-white">Home</Link>
                    <Link to="/dictionary" class="navbar-item has-text-weight-bold has-text-white">Dictionary</Link>
                    <Link to="/grammar" class="navbar-item has-text-weight-bold has-text-white">Grammar</Link>
                    <Link to="/progress-tracker" class="navbar-item has-text-weight-bold has-text-white">Progress Tracker</Link>
                </div>
            </div>
        </nav>
    );
}