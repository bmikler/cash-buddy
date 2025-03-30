import {getExpensesSummary} from "../../data/mockData.ts";
import ExpenseSummaryHeader from "./ExpenseSummaryHeader.tsx";
import {useNavigate} from "react-router-dom";
import {Category} from "../../types/Category.ts";

export default function ExpensesSummaryList() {

    const navigate = useNavigate();

    const handleAddExpenseClick = (category: Category) => {
        console.log("Test : " + JSON.stringify(category.name, null, 2));
        navigate("/expenses/add", { state: { category } });
    }

    return (
        <div className="list-wrapper">

            <div className="category-list-container">
                {getExpensesSummary().map((summary, index) => (
                    <div className="list-item-card" key={index} onClick={() => handleAddExpenseClick(summary.category)}>
                        <ExpenseSummaryHeader
                            categoryName={summary.category.name}
                            balance={summary.category.limit - summary.expenses.map(e => e.value).reduce((a, b) => a + b)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}