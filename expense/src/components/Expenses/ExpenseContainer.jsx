import React from 'react'

const ExpenseContainer = ({ expenseArr }) => {
  console.log(expenseArr);
    return <div>
        {
            expenseArr.map((e, i) => 
                <div className=' d-flex justify-content-around m-2 p-2 shadow' key={i}>
                    <p>Amount - {e.Amount}</p>
                    <p>Description - { e.Description}</p>
                    <p>Category - {e.Category}</p>
                </div>)
   }     
    </div>;
};

export default ExpenseContainer