import React from 'react';
import './App.css';
import {Frequency} from "./types/Frequency.ts";
import CategoryItem from "./components/CategoryItem.tsx";
import {expenses} from "./data/mockData.ts";

const App: React.FC = () => (
    <div className="app">
        <h1>Cash Buddy</h1>
        <CategoryItem description={"Test"} limit={11.22} type={Frequency.ANNUAL} expenses={expenses}/>
        {/*<CategoryList categories={categories} initialExpenses={initialExpenses} />*/}
    </div>
);

export default App;