import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import { DateTime}  from 'luxon'

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('132abc', { note: 'this is the note', amount: 120 })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '132abc',
        updates: {
            note: 'this is the note',
            amount: 120
        }
    })
})

test('Should setup add expense action object with values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 280000000,
        createdAt: DateTime.now().toMillis(),
        note: 'This is last months rent'
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            createdAt: expect.any(Number),
            id: expect.any(String)
        }
    })
})

test('Should setup add expense action object with defaults', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '', 
            note : '', 
            amount:  0, 
            createdAt: 0 
        }
    })
})