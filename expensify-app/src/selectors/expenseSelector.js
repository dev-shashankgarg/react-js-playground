export const getVisibleItems = ({expenses , filters})=>{

    return expenses.filter(expense => {

        const textFilter = !filters.text || expense.note.toLowerCase().includes(filters.text.toLowerCase())
        const startDateFilter = !filters.startDate || expense.createdAt >= filters.startDate
        const endDateFilter = !filters.endDate || expense.createdAt <= filters.endDate

        return textFilter && startDateFilter && endDateFilter
    })
}