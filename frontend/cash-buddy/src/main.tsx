import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CategoryDetailsList from "./components/categories/CategoryDetailsList.tsx";
import AddCategoryForm from "./components/categories/AddCategoryForm.tsx";
import ExpensesSummaryList from "./components/expenses/ExpensesSummaryList.tsx";
import AddExpenseForm from "./components/expenses/AddExpenseForm.tsx";

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
              element: <AddCategoryForm />
            },
            {
                path: 'expenses',
                element: <ExpensesSummaryList/>
            },
            {
                path: 'expenses/add',
                element: <AddExpenseForm />
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
