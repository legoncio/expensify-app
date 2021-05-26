import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import 'normalize.css/normalize.css'//Browser style normalization so every browser renders the same thing
import './styles/styles.scss'
import './firebase/firebase'

const store = configureStore()
// store.subscribe( () => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(<p>Loading...</p> , document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx , document.getElementById('app'))
})