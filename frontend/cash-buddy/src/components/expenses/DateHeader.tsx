type DateHeaderProps = {
    increase: () => void;
    decrease: () => void;
    date: Date;
};

export default function DateHeader({ increase, decrease, date }: DateHeaderProps) {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return (
        <div className="date-header">
            {/* Left arrow button */}
            <button className="date-header-btn" onClick={decrease} aria-label="Previous Month">
                {/* Minimal inline SVG icon (arrow pointing left) */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <h2 className="date-header-title">{formattedDate}</h2>

            {/* Right arrow button */}
            <button className="date-header-btn" onClick={increase} aria-label="Next Month">
                {/* Minimal inline SVG icon (arrow pointing right) */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>
        </div>
    );
}