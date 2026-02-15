import { createSlice } from "@reduxjs/toolkit";
const  Auth=createSlice({
    name:"user",
    initialState:{
        user:null,
        isLoggedIn:false,
    },
    reducers:{
        login:(state,action)=>{
             state.user=action.payload;
             state.isLoggedIn=true;
        },
        logout:(state,action)=>{
            state.user=null;
            state.isLoggedIn=false;
        }
    }
})

export const {login,logout}=Auth.actions;
export default Auth.reducer;