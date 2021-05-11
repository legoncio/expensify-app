import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses'
import { DateTime}  from 'luxon'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

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
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database and store', (done) => {//the donde parameter is to assert async functions. call done() after making the assertion
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000000,
        note: 'Logitech G502',
        createdAt: 10021652320
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
})

test('Should add expense with defaults to database and store', () => {
    const store = createMockStore({})
    const expenseData = {
        description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
    }

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        
    }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
})

// test('Should setup add expense action object with defaults', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense:{
//             id: expect.any(String),
//             description: '', 
//             note : '', 
//             amount:  0, 
//             createdAt: 0 
//         }
//     })
// })