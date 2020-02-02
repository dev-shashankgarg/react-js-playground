console.log('redux 101 file initialized!')

import { createStore, combineReducers } from 'redux'

const increment = ({by = 1} = {}) => ({
    type: 'INCREMENT',
    by
})

const decrement = ({by = 1 } = {}) => ({
    type: 'DECREMENT',
    by
})

const reset = () => ({
    type : 'RESET'
})

const set = (val = 0) => ({
    type: 'SET',
    to : val
})

const countReducerDefaultState = {
    val: 0
}

const countReducer = (state = countReducerDefaultState, action) => {
    switch(action.type){
        case 'INCREMENT' : {
            return {val: state.val + action.by}
        }
        case 'DECREMENT' : {
            return {val: state.val - action.by}
        }
        case 'RESET' : {
            return countReducerDefaultState
        }
        case 'SET' : {
            return {val: action.to}
        }
        default: return state
    }
}

const store = createStore(combineReducers({
    count: countReducer
}))


store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(increment({by: 5}))
store.dispatch(increment({by: 5}))
store.dispatch(increment())

store.dispatch(decrement({by: 4}))
store.dispatch(decrement({by: 4}))
store.dispatch(decrement())

store.dispatch(reset())
store.dispatch(set(30))

