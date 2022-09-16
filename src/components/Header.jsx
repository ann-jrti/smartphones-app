import React from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from '../state/cart/cartSlice';

import { Cart } from './Cart';

import styles from './Header.module.scss';

export const Header = () => {
    const { cart } = useSelector(cartSelector)
    return (
        <header className={styles.header}>
            <Cart cartItems={cart} />
        </header>
    )
}