import {BASE_URL} from "../url.ts";

export default function Header() {

    const handleLogout = () => {
        window.location.href = `${BASE_URL}/logout`;
    };


    return (
        <div className="header">
            <h1 className="header-title">Cash Buddy</h1>
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}