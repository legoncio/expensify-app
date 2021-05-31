import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory} from 'history'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import NotFoundPage from '../components/404'
import LoginPage from '../components/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage}/>
            </Switch> 
        </div> 
    </Router>
)

export default AppRouter