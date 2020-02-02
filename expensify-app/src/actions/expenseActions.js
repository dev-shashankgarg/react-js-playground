import uuid from 'uuid/v4'

export const newExpense = ({ note = 'untitled', description = 'untitled', amount = 0, createdDate = 0 } = {}) => ({
    type: 'NEW_EXPENSE',
    details: {
        id: uuid(),
        note,
        description,
        amount,
        createdDate
    }
})

export const editExpense = (id, updates) => ({
    type: 'UPDATE_EXPENSE',
    id,
    updates
})

export const deleteExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})