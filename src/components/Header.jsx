import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { cartSelector } from '../state/cart/cartSlice';
import { Cart } from './Cart';

import styles from './Header.module.scss';
import { Breadcrumbs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const { cart } = useSelector(cartSelector)
    const { pathname } = useLocation();
    return (
        <>
            <header className={styles.header}>
                <div className={styles.cartInfo}>
                    <ShoppingCartIcon style={{color: '#FEFAE0'}} />
                    <Cart cartItems={cart} />
                </div>
            </header>

            <div className={styles.breadcrumbsContainer}>
                <Breadcrumbs
                        className={styles.breadcrumbs}
                        aria-label="breadcrumb">
                    <Link to="/">Products</Link>
                    <Link
                            to={pathname}
                            >
                            {pathname.replace('/', '')}
                            </Link>
                </Breadcrumbs>
            </div>
        </>
    )
}