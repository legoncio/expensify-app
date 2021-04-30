export default (expenses) => {
    if(expenses === undefined || expenses.length === 0)
        return 0
    else
        return expenses.map((expense) => expense.amount).reduce((acc, curr) => acc + curr, 0)
}