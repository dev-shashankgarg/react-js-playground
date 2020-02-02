const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}

export default (state = filterReducerDefaultState, action) => {
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