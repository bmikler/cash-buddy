import {Category} from "../types/Category.ts";
import {Frequency} from "../types/Frequency.ts";
import {Expense} from "../types/Expense.ts";
import {ExpensesSummary} from "../types/ExpensesSummary.ts";

export const categories: Category[] = [
    { id: 1, name: 'Food & Dining', frequency: Frequency.MONTHLY, limit: 500 },
    { id: 2, name: 'Transportation', frequency: Frequency.MONTHLY, limit: 300 },
    { id: 3, name: 'Entertainment', frequency: Frequency.ANNUAL, limit: 1000 },
];


export const expenses: Expense[] = [
    { id: 1, description: 'Groceries', date: '2025-03-14', value: 50.25, categoryId: 1 },
    { id: 2, description: 'Restaurant', date: '2025-03-16', value: 80000.00, categoryId: 1 },
    { id: 3, description: 'Bus Pass', date: '2025-03-10', value: 30.00, categoryId: 2 },
    { id: 4, description: 'Taxi', date: '2025-03-12', value: 15.50, categoryId: 2 },
    { id: 5, description: 'Concert Ticket', date: '2025-03-15', value: 120.00, categoryId: 3 },
]

//Create method to get list of expensesSummary
export function getExpensesSummary(): ExpensesSummary[] {
    return categories.map(category => {
        const categoryExpenses = expenses.filter(expense => expense.categoryId === category.id);
        return {
            category: category,
            expenses: categoryExpenses
        };
    });
}