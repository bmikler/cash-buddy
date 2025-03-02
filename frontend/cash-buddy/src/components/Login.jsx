import {GoogleLogin} from '@react-oauth/google';

function Login({onLoginSuccess}) {

    return (
        <div className='App'>
            <h2>React Google Sign-In</h2>
            <GoogleLogin
                className="sign"
                onSuccess={credentialResponse => {
                    console.log("Credential response:")
                    console.log(credentialResponse)
                    onLoginSuccess(credentialResponse.credential)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            /></div>
    );
}

export default Login