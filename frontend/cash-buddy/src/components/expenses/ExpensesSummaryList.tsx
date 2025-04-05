import {useNavigate} from 'react-router-dom';
import {Category} from '../../types/Category';
import ExpenseSummaryHeader from './ExpenseSummaryHeader';

import {useEffect, useRef, useState} from "react";
import DateHeader from "./DateHeader.tsx";
import {ExpensesSummary} from "../../types/ExpensesSummary.ts";
import LoadingSpinner from "../LoadingSpinner.tsx";
import ErrorMessage from "../ErrorMessage.tsx";

export default function ExpensesSummaryList() {
    const navigate = useNavigate();

    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [expenses, setExpenses] = useState<ExpensesSummary[]>([]);
    const [showDetails, setShowDetails] = useState<{ [key: number]: boolean }>({});
    const [date, setDate] = useState(new Date());


    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);

            try {
                let input = `http://localhost:8080/api/v1/expens1es?date=${resolveDate()}`;
                const response = await fetch(input, {signal: abortControllerRef.current?.signal});

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const expenses = (await response.json()) as ExpensesSummary[];

                setExpenses(expenses);
            } catch (e: any) {

                if (e.name === 'AbortError') {
                    return;
                }

                setError(e);
            } finally {
                setIsLoading(false);
            }

        }

        fetchData()
    }, [date]);

    function resolveDate() {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}-${year}`;
    }

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

    if (error) {
        return <ErrorMessage message={error.toString()} />;
    }

    if (isLoading) {
        return (
            <div className="centered-container">
                <DateHeader increase={nextDate} decrease={previousDate} date={date}/>
                <LoadingSpinner/>
            </div>
        )
    }

    return (
        <div className="centered-container">
            <DateHeader
                increase={nextDate}
                decrease={previousDate}
                date={date}
            />
            <ul className="list-container">
                {expenses.map((summary, index) => (
                    <div key={index} className="list-item" onClick={() => toggle(index)}>

                        <div className="list-item__top">
                            <div className="list-item__header">
                                <ExpenseSummaryHeader
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