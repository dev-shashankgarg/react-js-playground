import React from 'react'

const ExpenseListItem = (props) => (
    <div>
        <p>
            {props.expense.note} {props.expense.amount} {props.expense.createdDate}
        </p>
    </div>
) 

export default ExpenseListItem