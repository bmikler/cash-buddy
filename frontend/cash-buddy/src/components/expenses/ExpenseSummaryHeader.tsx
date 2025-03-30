import {useState} from "react";
import {Expense} from "../../types/Expense.ts";
import ExpenseItem from "./ExpenseItem.tsx";


export default function ExpenseSummaryHeader(props: {
    categoryName: string,
    balance: number
    // type: Frequency,
    expenses: Expense[]
}) {

    const balanceClass = props.balance > 0 ? 'balance-positive' :
        props.balance === 0 ? 'balance-zero' : 'balance-negative';

    const [showDetails, setShowDetails] = useState(false);

    const toggle = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="category-details" onClick={toggle}>
            <div className="details-top">
                <p className="description">{props.categoryName}</p>

                {/* limit + edit button in one row */}
                <div className="limit-edit-row">
                    <p className="limit">
                        Balance: <span className={balanceClass}>{props.balance}</span> PLN
                    </p>
                </div>
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


    // return (
    //     <div onClick={toggle} className="category-item">
    //         <div className={"category-header"}>
    //             <span className="category-description">{props.description}</span>
    //             <span className="category-left-to-spend">{props.balance} PLN</span>
    //         </div>
    //
    //     </div>
    // );
}