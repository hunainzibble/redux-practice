import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/CounterSlice'
import printReducer from './Redux/UserSlice'

export const store = configureStore({
    reducer: {
        countera: counterReducer,
        print: printReducer,
    },
})