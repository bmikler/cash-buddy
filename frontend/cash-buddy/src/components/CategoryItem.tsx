import {useState} from 'react';
import {Frequency} from "../types/Frequency.ts";
import ExpenseItem from "./ExpenseItem.tsx";
import {Expense} from "../types/Expense.ts";
import '../styles/category-item.css'

export default function CategoryItem(props: {
    description: string,
    limit: number,
    type: Frequency,
    expenses: Expense[]
}) {

    const [showDetails, setShowDetails] = useState(false);

    const toggle = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div onClick={toggle} className="category-item">
            <div className={"category-header"}>
                <span className="category-description">{props.description}</span>
                <span className="category-left-to-spend">{props.limit} PLN</span>
            </div>
            {showDetails && (
                <div className={"expenses-list"}>
                    {props.expenses.map((expense, index) => (
                            <ExpenseItem key={index} description={expense.description} value={expense.value}/>
                        )
                    )}
                </div>
            )}
        </div>
    );
}