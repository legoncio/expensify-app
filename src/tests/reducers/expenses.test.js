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

test('should set expenses', () => {
    let action = {
        type: 'SET_EXPENSES',
        expenses
    }

    const initialState = expensesReducer(expenses, action)
    expect(initialState).toEqual(expenses)

    const newExpenses = [
        {
            id: 'expenseone',
            description: 'Xbox',
            amount: 280000000,
            note: '',
            createdAt: DateTime.fromObject({year: 2021, month: 2, day: 11, zone: 'locale'}).toMillis() // => 0
        },
        {
            id: 'expensetwo',
            description: 'Cardo Freecom 4+',
            amount: 6000000,
            note: 'Bike intercom update',
            createdAt: DateTime.fromObject({year: 2021, month: 3, day: 10, zone: 'locale'}).toMillis()
        },
        {
            id: 'expensethree',
            description: 'Credit card',
            amount: 185000000,
            note: 'This months credit card payment',
            createdAt: DateTime.fromObject({year: 2021, month: 5, day: 17, zone: 'locale'}).toMillis()
        }
    ]

    action = {
        type: 'SET_EXPENSES',
        expenses: newExpenses
    }

    const newState = expensesReducer(newExpenses, action)

    expect(newState).toEqual(newExpenses)
})