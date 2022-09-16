import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../cart/cartSlice'
import smartphonesSlice from '../smartphones/smartphonesSlice'

export const store = configureStore({
  reducer: {
    smartphones: smartphonesSlice,
    cart: cartSlice
  }
})