import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { cartSelector } from '../state/cart/cartSlice';
import { Cart } from './Cart';

import styles from './Header.module.scss';

export const Header = () => {
    const { cart } = useSelector(cartSelector)
    return (
        <header className={styles.header}>
            <div className={styles.cartInfo}>
                <ShoppingCartIcon style={{color: '#FEFAE0'}} />
                <Cart cartItems={cart} />
            </div>
        </header>
    )
}