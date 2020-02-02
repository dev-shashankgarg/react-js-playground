import React from 'react'
import { connect } from 'react-redux'

import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
    <div>
        {props.expenses && props.expenses.map(expense => {
            return <ExpenseListItem key={expense.id} expense={expense}></ExpenseListItem>
        })}
    </div>
)

const mapStateToProps = (state) => (
    {
        expenses: state.expenses,
        filters: state.filters
    }
)

export default connect(mapStateToProps)(ExpenseList)