import { createSlice } from '@reduxjs/toolkit'
const localSmartphoneData = JSON.parse(localStorage.getItem('smartphones'))

let initialState = {
  list: localSmartphoneData ? localSmartphoneData : [],
  filtered: []
}

export const smartphonesSlice = createSlice({
  name: 'smartphones',
  initialState,
  reducers: {
    setSmarthonesList: (state, action) => {
      state.list = action.payload;
    },
    setFilteredSmartphones: (state, action) => {
      state.filtered = action.payload;
    }
  },
})

export const { setSmarthonesList, setFilteredSmartphones } = smartphonesSlice.actions

export const smartphonesListSelector = (store) => {
  return store.smartphones.list
};

export const filteredSmartphonesSelector = (store) => {
  return store.smartphones.filtered
};


export default smartphonesSlice.reducer