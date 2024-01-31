import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency} = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const value = event.target.value;
        setNewBudget(value); // Update local state
        if (value < 20000) {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    };
    useEffect(()=>{
        if (newBudget >= 20000){
            alert("error you hv to use less funds ");
        }
    },[newBudget])


    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} min={0} max={20000}></input>
</div>
    );
};
export default Budget;