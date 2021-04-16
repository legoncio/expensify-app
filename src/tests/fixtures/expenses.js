import { DateTime } from 'luxon'

export default [
    {
        id: '1',
        description: 'Gum',
        amount: 95,
        note: '',
        createdAt: DateTime.fromObject({year: 1970, zone: 'utc'}).toMillis() // => 0
    },
    {
        id: '2',
        description: 'Rent',
        amount: 80000,
        note: 'Last months rent',
        createdAt: DateTime.fromObject({year: 1970, zone: 'utc'}).plus({days: -4}).toMillis()
    },
    {
        id: '3',
        description: 'Credit card',
        amount: 60000,
        note: '',
        createdAt: DateTime.fromObject({year: 1970, zone: 'utc'}).plus({days: 4}).toMillis()
    }
]