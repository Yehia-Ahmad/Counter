import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: {
        Counter: counterReducer,
        Authentication: authReducer
    }
})


export default store;
