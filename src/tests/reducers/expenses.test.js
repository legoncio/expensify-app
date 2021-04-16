import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import { DateTime } from 'luxon'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense if id not found', () => {
    const action = { type: 'REMOVE_EXPENSE', id: -1 }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expense', () => {
    const expense = {
        description: 'Xbox',
        amount: 60000,
        createdAt: DateTime.fromObject({year: 2021, month: 3, day: 9}).toMillis(),
        note: 'Xbox purchase'
    }
    const action = { 
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    expect(state.length).toBe(4)
    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            text: 'Candy',
            amount: 2000
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state[0].text).toBe('Candy')
    expect(state[0].amount).toBe(2000)
})

test('Should not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            text: 'Candy',
            amount: 2000
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})