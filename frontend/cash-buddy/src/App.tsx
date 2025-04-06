import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import LoadingSpinner from "./components/LoadingSpinner.tsx";
import Navbar from './components/Navbar';

import './App.css';
import './styles/ListStyles.css'
import './styles/ButtonsStyles.css';
import './styles/FormStyles.css';
import './styles/DataStyles.css';
import {useAuth} from "./hooks/useAuth.ts";
import {BASE_URL} from "./url.ts";


function App() {

    const { isError, isLoading } = useAuth();

    if (isError) {
        window.location.href = `${BASE_URL}/oauth2/authorization/google`;
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