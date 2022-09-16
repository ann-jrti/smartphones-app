import React from 'react';
import styles from './AddToCartBtn.module.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export const AddToCartBtn = () => {
    return(
        <button type="submit"className={styles.addCartBtn}>
            Add to cart
            <AddShoppingCartIcon style={{color: '#283618'}} />
        </button>
    )
}