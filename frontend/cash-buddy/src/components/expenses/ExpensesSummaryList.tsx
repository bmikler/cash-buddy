import {useNavigate} from 'react-router-dom';
import {getExpensesSummary} from '../../data/mockData';
import {Category} from '../../types/Category';
import ExpenseSummaryHeader from './ExpenseSummaryHeader';

import {useState} from "react";     // for .btn

export default function ExpensesSummaryList() {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState<{ [key: number]: boolean }>({});

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