import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
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