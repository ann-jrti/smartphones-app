import { createSlice } from '@reduxjs/toolkit'
const localSmartphoneData = JSON.parse(localStorage.getItem('smartphones'))

let initialState = {
  list: localSmartphoneData ? localSmartphoneData : [],
  filtered: [],
  smartphoneDetails: null
}

//actions
export const smartphonesSlice = createSlice({
  name: 'smartphones',
  initialState,
  reducers: {
    setSmarthonesList: (state, action) => {
      state.list = action.payload;
    },
    setFilteredSmartphones: (state, action) => {
      state.filtered = action.payload;
    },
    setSmartphoneDetails: (state, action) => {
      state.smartphoneDetails = action.payload;
    }
  },
})

export const {
  setSmarthonesList,
  setFilteredSmartphones,
  setSmartphoneDetails
} = smartphonesSlice.actions

//selectors
export const smartphonesListSelector = (store) => {
  return store.smartphones.list
};

export const filteredSmartphonesSelector = (store) => {
  return store.smartphones.filtered
};

export const smartphoneDetailsSelector = (store) => {
  return store.smartphones.smartphoneDetails
};

export default smartphonesSlice.reducer