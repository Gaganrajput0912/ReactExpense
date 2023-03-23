
import React, { useContext, useEffect } from 'react'
import { expenseContext } from '../../context/ExpenseContext';
const ExpenseContainer = () => {
    const {expenses} = useContext(expenseContext)
    return <div>
        {
           expenses.map((e, i) => 
                <div className=' d-flex justify-content-around m-2 p-2 shadow' key={i}>
                    <p>Amount - {e.Amount}</p>
                    <p>Description - { e.Description}</p>
                    <p>Category - {e.Category}</p>
                </div>)
   }     
    </div>;
};

export default ExpenseContainer