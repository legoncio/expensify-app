import { DateTime } from 'luxon'

//Filters reducer
export const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: DateTime.now().startOf('month').toMillis(),
    endDate: DateTime.now().endOf('month').toMillis()
}
export const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_FILTERS':
            return {
                ...state,
                ...action.updates
            }
        default:
            return state
    }
}