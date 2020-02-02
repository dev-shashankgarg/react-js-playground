
const expenseReducerDefaultState = []

export default (state = expenseReducerDefaultState, action) => {
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