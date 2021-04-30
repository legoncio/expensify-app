import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => (
    <div>
    {console.log(props.expensesTotal)}
    {console.log(props.expenses)}
        {
            props.expenses.length === 1 ? (
                <p>Viewing 1 expense totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
            ) : (
                <p>Viewing {props.expenses.length} expenses totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
            )
        }
    </div>
)

const mapStateToProps = (state) => {

    const expenses = selectExpenses(state.expenses, state.filters)
    const expensesTotal = getExpensesTotal(expenses)
    
    return {
        expenses, expensesTotal
    }
}

export default connect(mapStateToProps)(ExpensesSummary)