import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
};
const userSlices = createSlice({
       name: "user",
       initialState,
       reducers:{
           signInSuccess:(state,action)=>{
               state.currentUser = action.payload;
           },
           updateUserSuccess:(state,action)=>{
               state.currentUser = action.payload;
           },
           deleteUserSuccess:(state)=>{
            state.currentUser = null;
        },
        
       },
})
export const{signInSuccess,updateUserSuccess,deleteUserSuccess} = userSlices.actions;
export default userSlices.reducer;