import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CategoryDetailsList from "./components/settings/CategoryDetailsList.tsx";
import ExpensesSummary from "./expenses/ExpensesSummary.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            // The 'index' route is what shows initially (empty content).
            {
                index: true,
                element: null
            },
            {
                path: 'categories',
                element: <CategoryDetailsList/>
            },
            {
                path: 'expenses',
                element: <ExpensesSummary/>
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
