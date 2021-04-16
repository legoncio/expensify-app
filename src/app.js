import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setFilters } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'//Browser style normalization so every browser renders the same thing
import './styles/styles.scss'

const store = configureStore()
store.subscribe( () => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

store.dispatch(addExpense({description: 'Water bill', amount: 5000, createdAt: 15000}))
store.dispatch(addExpense({description: 'Gas bill', amount: 2000, createdAt: 600000}))
store.dispatch(addExpense({description: 'Electricity bill', amount: 600000, createdAt: 2300}))
store.dispatch(addExpense({description: 'Rent', amount: 18000000, createdAt: 14000}))

console.log(store.getState())
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx , document.getElementById('app'))