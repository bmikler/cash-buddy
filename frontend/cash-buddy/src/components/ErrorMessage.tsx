import '../styles/ErrorStyles.css'

type ErrorMessageProps = {
    message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <div className="error-card">
            <p className="error-text">{message}</p>
        </div>
    );
}