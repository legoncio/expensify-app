import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => {
    const total = numeral(props.expensesTotal / 100).format('$0,0')
    return(
        <div>
            {
                props.expensesCount === 1 ? (
                    <h2>Viewing 1 expense totalling {total}</h2>
                ) : (
                    <h2>Viewing {props.expensesCount} expenses totalling {total}</h2>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {

    const expenses = selectExpenses(state.expenses, state.filters)
    const expensesTotal = getExpensesTotal(expenses)

    return {
        expensesCount : expenses.length,
        expensesTotal
    }
}

export default connect(mapStateToProps)(ExpensesSummary)