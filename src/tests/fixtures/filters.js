import { DateTime } from 'luxon'

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filters2 = {
    text: 'bill',
    sortBy: 'amount',
    startDate: DateTime.fromObject({year: 1970, zone: 'utc'}).toMillis(),
    endDate: DateTime.fromObject({year: 1970, zone: 'utc'}).plus({days: 4}).toMillis()
}

export { filters, filters2 }