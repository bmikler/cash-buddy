import { Expense } from '../../types/Expense';
import ExpenseItem from './ExpenseItem';

type ExpenseSummaryHeaderProps = {
    categoryName: string;
    balance: number;
    expenses: Expense[];
    showDetails: boolean;
};

export default function ExpenseSummaryHeader({
                                                 categoryName,
                                                 balance,
                                                 expenses,
                                                 showDetails
                                             }: ExpenseSummaryHeaderProps) {
    return (
        <div>
            <span>{categoryName} - </span>
            <span>Balance: {balance} PLN</span>
            {showDetails && (
                <div className="list-item__children toggle-details--visible">
                    {expenses.map((expense, index) => (
                        <ExpenseItem
                            key={index}
                            description={expense.description}
                            value={expense.value}
                        />
                    ))}
                </div>
            )}
            {!showDetails && (
                <div className="list-item__children toggle-details--hidden">
                </div>
            )}
        </div>
    );
}