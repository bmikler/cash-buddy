import React, {useState} from 'react';
import Login from './components/Login';
import Mock from './components/Mock';

function App() {
    const [isLogged, setIsLogged] = useState(localStorage.getItem('token') !== null);

    const handleLoginSuccess = (newToken) => {
        localStorage.setItem('token', newToken);
        setIsLogged(true);
        console.log("Token " + newToken + " has been set");
    };


    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLogged(false);
    }

    return (
        <div className="App">
            {isLogged ? (
                <Mock onLogout={handleLogout}/>
            ) : (
                <Login onLoginSuccess={handleLoginSuccess}/>
            )}
        </div>
    );
}

export default App;