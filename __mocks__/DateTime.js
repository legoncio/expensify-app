const { DateTime: dateTime } = jest.requireActual('luxon')

export class DateTime {
    now(){
        return dateTime.fromObject({year: 1970, zone: 'utc'})
    }
    
    toMillis(){
        return dateTime.fromObject({year: 1970, zone: 'utc'}).toMillis()
    }
}