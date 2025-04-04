import {useNavigate} from 'react-router-dom';
import {getExpensesSummary} from '../../data/mockData';
import {Category} from '../../types/Category';
import ExpenseSummaryHeader from './ExpenseSummaryHeader';

import {useState} from "react";
import DateHeader from "./DateHeader.tsx";     // for .btn

export default function ExpensesSummaryList() {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState<{ [key: number]: boolean }>({});
    const [date, setDate] = useState(new Date());

    const handleAddExpenseClick = (category: Category) => {
        navigate('/expenses/add', {state: {category}});
    };

    const toggle = (index: number) => {
        setShowDetails((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const summaries = getExpensesSummary();

    return (
        <div className="centered-container">
            <DateHeader
                increase={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDay()))}
                decrease={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDay()))}
                date={date}
            />
            <ul className="list-container">
                {summaries.map((summary, index) => (
                    <div key={index} className="list-item" onClick={() => toggle(index)}>

                        <div className="list-item__top">
                            <div className="list-item__header">
                                <ExpenseSummaryHeader
                                    categoryName={summary.category.name}
                                    balance={summary.category.limit}
                                    expenses={summary.expenses}
                                    showDetails={!!showDetails[index]}
                                />
                            </div>

                            <button
                                className="btn"
                                onClick={() => handleAddExpenseClick(summary.category)}
                            >
                                + Add
                            </button>
                        </div>
                    </div>
                ))}
            </ul>

        </div>

    );
}