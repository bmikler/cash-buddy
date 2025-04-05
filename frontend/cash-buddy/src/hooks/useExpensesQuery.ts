import {useQuery} from "@tanstack/react-query";
import {ExpensesSummary} from "../types/ExpensesSummary.ts";

const BASE_URL = 'http://localhost:8080/api/v1';
const EXPENSES_PATH = '/expenses';

export function useExpensesQuery(date: Date) {
    return useQuery({
        queryKey: ['expenses', date],
        queryFn: async () => {
            const input = `${BASE_URL}${EXPENSES_PATH}?date=${resolveDate(date)}`;
            const response = await fetch(input);
            return (await response.json()) as ExpensesSummary[];
        }
    })
}

function resolveDate(date: Date) {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${year}`;
}


