// import { createStore } from 'redux';
import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialCounterState = { counter: 0, showCounter: true };


const counterSlice = createSlice({
    name: "Counter",
    initialState: initialCounterState,
    reducers: {
        increament(state) {
            state.counter++
        },
        decreament(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
})

const initialAuthenticationState = {
    isAuthentication: false
}

const authSlice = createSlice({
    name: "Authentication",
    initialState: initialAuthenticationState,
    reducers: {
        Login(state) {
            state.isAuthentication = true
        },
        Logout(state) {
            state.isAuthentication = false
        }
    }

})

const store = configureStore({
    reducer: {
        Counter: counterSlice.reducer,
        Authentication: authSlice.reducer
    }
})

export const counterActions = counterSlice.actions;
export const authenticationActions = authSlice.actions;

export default store;



/*const ReducerFun = (state = intialState, action) => {

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
*/
