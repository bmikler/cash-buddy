import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link className="nav-link" to="categories">Categories</Link>
                </li>
                <li>
                    <Link className="nav-link" to="expenses">Expenses</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;