import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useExpensesQuery} from "../../hooks/useExpensesQuery.ts";
import {Category} from '../../types/Category';
import ErrorMessage from "../ErrorMessage.tsx";
import LoadingSpinner from "../LoadingSpinner.tsx";
import DateNavbar from "./DateNavbar.tsx";

import ExpenseHeader from './ExpenseHeader.tsx';

export default function ExpensesList() {
    const navigate = useNavigate();

    const [showDetails, setShowDetails] = useState<{ [key: number]: boolean }>({});
    const [date, setDate] = useState(new Date());

    const {
        data: expenses,
        isError,
        error,
        isLoading,
    } = useExpensesQuery(date)

    const handleAddExpenseClick = (category: Category) => {
        navigate('/expenses/add', {state: {category}});
    };

    const toggle = (index: number) => {
        setShowDetails((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    function nextDate() {
        setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, prevDate.getDay()));
    }

    function previousDate() {
        setDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, prevDate.getDay()));
    }

    if (isError) {
        return <ErrorMessage message={error.message}/>;
    }

    if (isLoading) {
        return (
            <div className="centered-container">
                <DateNavbar increase={nextDate} decrease={previousDate} date={date}/>
                <LoadingSpinner/>
            </div>
        )
    }

    return (
        <div className="centered-container">
            <DateNavbar
                increase={nextDate}
                decrease={previousDate}
                date={date}
            />
            <ul className="list-container">
                {expenses?.map((summary, index) => (
                    <div key={index} className="list-item" onClick={() => toggle(index)}>

                        <div className="list-item__top">
                            <div className="list-item__header">
                                <ExpenseHeader
                                    categoryName={summary.category.name}
                                    balance={summary.category.limit}
                                    expenses={summary.expenses}
                                    showDetails={showDetails[index]}
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