import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import LoadingSpinner from "./components/LoadingSpinner.tsx";
import Login from "./components/Login.tsx";
import Navbar from './components/Navbar';

import './App.css';
import './styles/ListStyles.css'
import './styles/ButtonsStyles.css';
import './styles/FormStyles.css';
import './styles/DataStyles.css';
import {useAuth} from "./hooks/useAuth.ts";


function App() {

    const { isError, isLoading } = useAuth();

    if (isError) {
        return <Login />
    }

    if (isLoading) {
        return <LoadingSpinner/>
    }

    return (
            <div className="app-container">
                <Header/>
                <Navbar/>
                <div className="outlet-container">
                    <Outlet/>
                </div>
            </div>
    );
}

export default App;