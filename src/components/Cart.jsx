import React from 'react';
import { Typography } from '@mui/material';
import styles from './Cart.module.scss';

export const Cart = ({cartItems}) => {
    return (
        <Typography
            level='h3'
            className={styles.cartItemsText}
            >
            Items in cart: <span>{cartItems}</span>
        </Typography>
    )
}