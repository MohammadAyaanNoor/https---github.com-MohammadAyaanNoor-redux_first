import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0,
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increaseCount:(state,action)=>{
            state.value = action.payload
        },
        decreaseCount:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {increaseCount,decreaseCount} = counterSlice.actions
export default counterSlice.reducer