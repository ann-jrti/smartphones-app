import React from 'react';
import styles from './CustomBtn.module.scss';

export const CustomBtn = ({text, onChildClick}) => {
    return(
        <button
            onClick={onChildClick}
            className={styles.addCartBtn}
            >
            {text}
        </button>
    )
}