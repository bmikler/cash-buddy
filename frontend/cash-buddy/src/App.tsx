import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Outlet} from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';

import './App.css';
import './styles/ListStyles.css'
import './styles/ButtonsStyles.css';
import './styles/FormStyles.css';
import './styles/DataStyles.css';

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="app-container">
                <Header/>
                <Navbar/>
                <div className="outlet-container">
                    <Outlet/>
                </div>
            </div>
        </QueryClientProvider>
    );
}

export default App;