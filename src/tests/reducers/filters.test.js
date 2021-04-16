import { DateTime } from 'luxon'
import { filtersReducer } from '../../reducers/filters'

test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: DateTime.now().startOf('month').toMillis(),
        endDate: DateTime.now().endOf('month').toMillis()
    })
})

test('Should setup filters provided', () => {
    const startDate = DateTime.fromObject({year: 2021}).plus({months: 3}).toMillis()
    const endDate = DateTime.fromObject({year: 2021}).plus({months: 4}).toMillis()
    const text = 'bill'
    const sortBy = 'amount'
    const currentState = {
        text,
        startDate,
        endDate,
        sortBy
    }
    const action = { type: 'SET_FILTERS' }
    const state = filtersReducer(currentState, action)
    expect(state.text).toBe(text)
    expect(state.startDate).toBe(startDate)
    expect(state.endDate).toBe(endDate)
    expect(state.sortBy).toBe(sortBy)
})