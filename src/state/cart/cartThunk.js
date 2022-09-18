import { addProductToCart } from '../../api/requests';
import { getCookie, setCookie } from '../../cookies';
import { setCart } from './cartSlice';

export const getCart = (data) => (
    async dispatch => {
        const cart = await addProductToCart(data)
        console.log(cart)
        if (cart) {
            dispatch(setCart(cart.data.count))
            let cartCookie = parseInt(getCookie('cart'))
            if (!cartCookie) {
                setCookie('cart', cart.data.count)
            } else {
                cartCookie += 1
                setCookie('cart', cartCookie)
            }
        }
    }
);

