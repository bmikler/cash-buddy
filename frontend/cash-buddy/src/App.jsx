import React, {useState} from 'react';
import Login from './components/Login';
import Mock from './components/Mock';

function App() {
    const [token, setToken] = useState(null);

    const handleLoginSuccess = (newToken) => {
        setToken(newToken);
        console.log("Token " + newToken + " has been set");
    };

    const handleLogout = () => {
        setToken(null);
    };

    return (
        <div className="App">
            {token ? (
                <Mock token={token}/>
            ) : (
                <Login onLoginSuccess={handleLoginSuccess}/>
            )}
        </div>
    );
}

export default App;