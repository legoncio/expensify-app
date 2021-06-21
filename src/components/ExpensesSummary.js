import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => {
    const total = numeral(props.expensesTotal / 100).format('$0,0')
    return(
        <div className="page-header">
            <div className="content-container">
            {
                props.expensesCount === 1 ? (
                    <h2 className="page-header__title">Viewing <span>1</span> expense totalling <span>{total}</span></h2>
                ) : (
                    <h2 className="page-header__title">Viewing <span>{props.expensesCount}</span> expenses totalling <span>{total}</span></h2>
                )
            }
                <div className="page-header__action">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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