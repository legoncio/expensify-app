import { filtersReducerDefaultState } from '../reducers/filters'

//SET_FILTERS
export const setFilters = (updates = filtersReducerDefaultState) => ({
    type: 'SET_FILTERS',
    updates
})