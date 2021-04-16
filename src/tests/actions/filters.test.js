import { setFilters } from '../../actions/filters'
import { filtersReducerDefaultState } from '../../reducers/filters'
import { DateTime } from 'luxon'

test('Should setup set filters action object with given values', () => {
    const action = setFilters({
        text: 'rent',
        sortBy: 'amount',
        startDate: DateTime.fromObject({year: 2021, month: 1, day: 1}).toMillis(),
        endDate: DateTime.fromObject({year: 2021, month: 12, day: 31}).toMillis()
    })

    expect(action).toEqual({
        type: 'SET_FILTERS',
        updates: {
            text: 'rent',
            sortBy: 'amount',
            startDate: expect.any(Number),
            endDate: expect.any(Number)
        }
    })
})

test('Should setup filters action object with defaults', () => {
    const action = setFilters()
    expect(action).toEqual({
        type: 'SET_FILTERS',
        updates: {
            ...filtersReducerDefaultState,
            startDate: expect.any(Number),
            endDate: expect.any(Number)
        }
    })
})
