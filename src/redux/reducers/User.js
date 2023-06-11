import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {value: []},
    reducers: {
        addUsername: (state,action) =>{
            state.value.push(action.payload);
        },
    }
})


export default userSlice.reducer

export const {addUsername} = userSlice.actions;