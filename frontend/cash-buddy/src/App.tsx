import React from 'react';
import './App.css';


import AddExpenseForm from "./components/AddExpenseForm.tsx";

const App: React.FC = () => (
    <div className="app">
        <h1>Cash Buddy</h1>
        <AddExpenseForm />
        {/*<CategoryItem description={"Test"} limit={11.22} type={Frequency.ANNUAL} expenses={expenses}/>*/}
        {/*<CategoryList categories={categories} initialExpenses={initialExpenses} />*/}
    </div>
);

export default App;