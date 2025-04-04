import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

import './App.css';
import './styles/ListStyles.css'
import './styles/ButtonsStyles.css';
import './styles/FormStyles.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <Navbar />
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    );
}

export default App;