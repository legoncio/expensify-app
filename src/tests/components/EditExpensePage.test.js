import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpense'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, expense, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    expense = expenses[1]
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expense}/>)
})

test('Should render page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense)
})

test('Should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense.id)
})