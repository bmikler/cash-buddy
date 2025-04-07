import {BASE_URL} from "../url.ts";

export default function Login() {

    const handleGoogleLogin = () => {
        window.location.href = `${BASE_URL}/oauth2/authorization/google`;
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Cash Buddy</h1>
            <p className="login-info">You are not logged in.</p>
            <button className="login-btn" onClick={handleGoogleLogin}>
                Login with Google
            </button>
        </div>
    );
}