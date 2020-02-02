export const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
})

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

export const setStartDateFilter = (date) => ({
    type: 'START_DATE_FILTER',
    date
})

export const setEndDateFilter = (date) => ({
    type: 'END_DATE_FILTER',
    date
})