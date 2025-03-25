import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="categories">Categories</Link>
                </li>
                <li>
                    <Link to="expenses">Expenses</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;