import {configureStore} from "@reduxjs/toolkit"
import userreducer from "../App/UserSlice"
export const store=configureStore({
    reducer:{
        users:userreducer,
    }
})