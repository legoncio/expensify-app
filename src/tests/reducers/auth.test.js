import authReducer from '../../reducers/auth'

const uid = 'Mzxre4567'

test('should set uid when login', () => {
    const action = {
        type: 'LOGIN',
        uid
    }

    const state = authReducer(undefined, action)
    expect(state).toEqual({
        uid
    })
})

test('should remove uid when logout', () => {
    const action = {
        type: 'LOGOUT'
    }

    const state = authReducer({uid}, action)
    expect(state).toEqual({})
})