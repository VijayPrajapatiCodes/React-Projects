import {createSlice} from "@reduxjs/toolkit"
import reducer from "./Auth"
const Counter=createSlice({
    name:"count",
    initialState:{
        value:0
    },
   reducers:{
     Increment:(state)=>{
        state.value+=1;
     },
     Decrement:(state)=>{
        state.value-=1;
     },
     Reset:(state)=>{
        state.value=0;
     }
   }
})
export const{Increment,Decrement,Reset}=Counter.actions;
export default Counter.reducer;