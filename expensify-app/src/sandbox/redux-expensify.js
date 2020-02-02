import { createStore, combineReducers } from 'redux'
import uuid from 'uuid/v4'

const newExpense = ({ note = 'untitled', description = 'untitled', amount = 0, createdDate = 0 } = {}) => ({
    type: 'NEW_EXPENSE',
    details: {
        id: uuid(),
        note,
        description,
        amount,
        createdDate
    }
})

const editExpense = (id, updates) => ({
    type: 'UPDATE_EXPENSE',
    id,
    updates
})

const deleteExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDateFilter = (date) => ({
    type: 'START_DATE_FILTER',
    date
})

const setEndDateFilter = (date) => ({
    type: 'END_DATE_FILTER',
    date
})

const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'NEW_EXPENSE': {
            return [...state, action.details]
        }
        case 'REMOVE_EXPENSE': {
            return state.filter(expense => expense.id !== action.id)
        }
        case 'UPDATE_EXPENSE': {
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...updates
                    }
                }
                return expense
            })
        }
        default: return state
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER': {
            return {
                ...state,
                text: action.text
            }
        }
        case 'START_DATE_FILTER': {
            return {
                ...state,
                startDate: action.date
            }
        }
        case 'END_DATE_FILTER': {
            return {
                ...state,
                endDate: action.date
            }
        }
        case 'SORT_BY_AMOUNT': {
            return {
                ...state,
                sortBy: 'amount'
            }
        }
        case 'SORT_BY_DATE': {
            return {
                ...state,
                sortBy: 'date'
            }
        }
        default: return state
    }
}

const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}))

console.log(store.getState())
