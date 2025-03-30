import {getExpensesSummary} from "../../data/mockData.ts";
import ExpenseSummaryHeader from "./ExpenseSummaryHeader.tsx";
import {useNavigate} from "react-router-dom";
import {Category} from "../../types/Category.ts";

export default function ExpensesSummaryList() {

    const navigate = useNavigate();

    const handleAddExpenseClick = (category: Category) => {
        navigate("/expenses/add", { state: { category } });
    }

    return (
        <div className="list-wrapper">
            <div className="category-list-container">
                {getExpensesSummary().map((summary, index) => (
                    <div className="list-item-card" key={index}>
                        {/* Add a wrapper for the header and button to align them in one row */}
                        <div className="header-with-button">
                            <ExpenseSummaryHeader
                                categoryName={summary.category.name}
                                balance={
                                    summary.category.limit -
                                    summary.expenses.map((e) => e.value).reduce((a, b) => a + b, 0)
                                }
                                expenses={summary.expenses}
                            />
                            <button
                                className="add-expense-button"
                                onClick={() => handleAddExpenseClick(summary.category)}
                            >
                                + Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}