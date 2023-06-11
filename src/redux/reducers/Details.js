import { createSlice } from "@reduxjs/toolkit";
import {Data} from "../../Fakedata";

export const dataSlice = createSlice({
    name: "data",
    initialState: {value: Data},
    reducers: {
        addData: (state, action) =>{
            state.value.push(action.payload);
        },
    }
})

export default dataSlice.reducer
export const {addData} = dataSlice.actions;
// const initialState = [

// ];

// const Details = (state = initialState, action) => {
//     switch(action.type){
//         case "ADD_DATA":
//             state = {...state,action.payload};
//         default: 
//         return state;
//     }
// };

// export default Details; 
