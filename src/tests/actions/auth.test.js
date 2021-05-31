import { login, logout } from '../../actions/auth'

test('should setup login action properly', () => {
    const uid = 'Mzxre4567'
    const action = login(uid)

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should setup logout action properly', () => {
    const action = logout()
    
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})