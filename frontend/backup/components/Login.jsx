import {GoogleLogin} from '@react-oauth/google';

function Login({onLoginSuccess}) {

    return (
        <div className='App'>
            <h2>React Google Sign-In</h2>
            <GoogleLogin
                className="sign"
                onSuccess={credentialResponse => {
                    onLoginSuccess(credentialResponse.credential)
                }}
                onError={() => {
                }}
            /></div>
    );
}

export default Login