import React, {useEffect, useState} from 'react';

const URL = 'http://localhost:8080/api/v1/test'

export default function Mock({onLogout}) {

    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage("Dupa")
    }, []);

    // useEffect(() => {
    //     const fetchMessage = async () => {
    //         const response = await fetch(
    //             URL, {
    //                 headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    //             }
    //         )
    //         const message = await response.text()
    //         setMessage(message)
    //     }
    //
    //     fetchMessage()
    // }, [])

    return (
        <div>
            <h2>Mock Component</h2>
            <p>Logged user: {message}</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );

}