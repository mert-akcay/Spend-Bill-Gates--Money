import { createSlice } from '@reduxjs/toolkit'

export const moneySlice = createSlice({
    name:'money',
    initialState:{
        amount : 100000000000
    },
    reducers: {
        setMoney: (state,action) => {
            state.amount = action.payload
        },
    }
})

export const { setMoney } = moneySlice.actions;
export default moneySlice.reducer;
