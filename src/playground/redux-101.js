import { createStore } from 'redux'

const countReducer = (state = { count: 0 }, {type, incrementBy, decrementBy, setTo}) => {
    
    switch(type) {
        case 'INCREMENT':
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: setTo
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe( () => {
    console.log(store.getState())
})

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ( { setTo } ) => ({
    type: 'SET',
    setTo
})
const resetCount = () => ({
    type: 'RESET'
})

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(setCount({setTo: 25}))