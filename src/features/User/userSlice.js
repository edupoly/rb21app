import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails:null
}

export const userSlice = createSlice({
    name:'userData',
    initialState,
    reducers:{
        updateUserDetails:(state,action)=>{
            state.userDetails={...action.payload}
        },
        logout:(state,action)=>{
            state.userDetails=null
        }
    }
})

export const {updateUserDetails,logout} = userSlice.actions;
export default userSlice.reducer;