
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    // const handleDeleteExpense = () => {
    //     dispatch({
    //         type: 'DELETE_EXPENSE',
    //         payload: props.id,
    //     });
    // };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreacAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button onClick={event=> decreacAllocation(props.name)}>-</button></td>
        </tr>
    );
};

export default ExpenseItem;