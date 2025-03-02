import React, {useEffect, useState} from 'react';

const URL = 'http://localhost:8080/api/v1/test'

export default function Mock({token}) {

    const [message, setMessage] = useState('');

    // useEffect(() => {
    //     const fetchMessage = async () => {
    //         const response = await fetch(URL, {
    //             headers: {
    // }, []);

    return (
        <div>
            <h2>Mock Component</h2>
            <p>Token: {token}</p>
            <button >Get Message</button>
            <p>{message}</p>
        </div>
    );

}