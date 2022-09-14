import { createSlice } from '@reduxjs/toolkit'

const localSmartphoneData = JSON.parse(localStorage.getItem('smartphones'))

let initialState = {
  list: localSmartphoneData ? localSmartphoneData : []
}

export const smartphonesSlice = createSlice({
  name: 'smartphones',
  initialState,
  reducers: {
    setSmarthonesList: (state, action) => {
      state.list = action.payload;
    }
  },
})

export const { setSmarthonesList } = smartphonesSlice.actions

export const smartphonesListSelector = (store) => {
  return store.smartphones.list
};


export default smartphonesSlice.reducer