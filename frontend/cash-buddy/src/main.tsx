import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.tsx'
import AddCategoryForm from "./components/categories/AddCategoryForm.tsx";
import CategoryDetailsList from "./components/categories/CategoryDetailsList.tsx";
import AddExpenseForm from "./components/expenses/AddExpenseForm.tsx";
import ExpensesList from "./components/expenses/ExpensesList.tsx";

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: null
            },
            {
                path: 'categories',
                element: <CategoryDetailsList/>
            },
            {
                path: 'categories/add',
                element: <AddCategoryForm/>
            },
            {
                path: 'expenses',
                element: <ExpensesList/>
            },
            {
                path: 'expenses/add',
                element: <AddExpenseForm/>
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </StrictMode>,
)
