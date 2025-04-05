import {Expense} from "./Expense.ts";
import {Category} from "./Category.ts";

export interface ExpensesSummary {
    category: Category,
    balance: number;
    expenses: Expense[];
}