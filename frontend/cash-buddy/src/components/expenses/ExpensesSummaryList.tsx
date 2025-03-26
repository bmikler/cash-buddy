import {getExpensesSummary} from "../../data/mockData.ts";
import ExpenseSummaryHeader from "./ExpenseSummaryHeader.tsx";

export default function ExpensesSummaryList() {

    return (
        <div className="list-wrapper">

            <div className="category-list-container">
                {getExpensesSummary().map((summary, index) => (
                    <div className="list-item-card" key={index}>
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