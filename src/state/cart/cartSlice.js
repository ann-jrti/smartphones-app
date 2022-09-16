import { createSlice } from '@reduxjs/toolkit'
import { getCookie } from '../../cookies';

let cartCookie = parseInt(getCookie('cart'))

let initialState = {
  cart: cartCookie ? cartCookie : 0
}

//actions
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart += action.payload;
    }
  },
})

export const { setCart } = cartSlice.actions

//selector
export const cartSelector = (store) => {
  return store.cart
};

export default cartSlice.reducer