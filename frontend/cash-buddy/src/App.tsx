import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

import './App.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <Navbar />

            {/* You can apply a class for main content styling */}
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}

export default App;