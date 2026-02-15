import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../App/Auth"
import countReducer from "../App/Counter"
export const Store=configureStore({
    reducer:{
       auth: authReducer,
       counter:countReducer,
    }
})