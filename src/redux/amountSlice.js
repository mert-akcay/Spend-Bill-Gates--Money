import { createSlice } from '@reduxjs/toolkit'

export const amountSlice = createSlice({
    name:'amount',
    initialState:{
        amountArr : new Array(45).fill(0),
    }, 
    reducers: {
        setAmount: (state,action) => {
            state.amountArr = action.payload
        },
    }
})

export const { setAmount } = amountSlice.actions;
export default amountSlice.reducer;
