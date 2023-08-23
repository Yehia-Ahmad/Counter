import { createStore } from 'redux';

const ReducerFun = (state = intialState, action) => {

    if (action.type === "Increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    } else if (action.type === "Increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    } else if (action.type === "Decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    } else if (action.type === "Hide") {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }
    return state
}

const store = createStore(ReducerFun);