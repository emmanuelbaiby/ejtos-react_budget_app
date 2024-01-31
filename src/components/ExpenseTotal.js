
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, budget, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    useEffect(()=>{
        if (budget <= expenses){
            alert(`budget cannot be less then the expenses: ${expenses}`)
        }
    },[budget, expenses])
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
