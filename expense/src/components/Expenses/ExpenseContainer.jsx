
import React, { useContext, useEffect,useState } from 'react'
import EditForm from './EditForm';
import { expenseContext } from '../../context/ExpenseContext';
const ExpenseContainer = () => {
    const { expenses, deleteExpense } = useContext(expenseContext);
    const [editShow,setEditShow] = useState(false)
    return (
      <div>
        {expenses.map((e, i) => (

        <div
            className=" d-flex justify-content-around m-2 p-2 shadow"
            key={i}
          >
            <p>Amount - {e.Amount}</p>
            <p>Description - {e.Description}</p>
            <p>Category - {e.Category}</p>
            <div className=" d-flex gap-2">
             <EditForm item={e} />
              <button
                onClick={() => deleteExpense(e.id)}
                className=" btn btn-danger"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ExpenseContainer