import { configureStore } from '@reduxjs/toolkit'
import moneySlice from './moneySlice'
import amountSlice from './amountSlice'

export const store = configureStore({
    reducer:{
        money: moneySlice,
        amount: amountSlice,
    }
});

