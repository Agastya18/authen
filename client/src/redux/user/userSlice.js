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
       },
})
export const{signInSuccess} = userSlices.actions;
export default userSlices.reducer;