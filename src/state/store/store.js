import { configureStore } from '@reduxjs/toolkit'
import smartphonesSlice from '../smartphones/smartphonesSlice'

export const store = configureStore({
  reducer: {
    smartphones: smartphonesSlice
  }
})