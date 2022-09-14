import React from 'react';
import styles from './SmartphoneCard.module.scss';

export const SmartphoneCard = ({
    img,
    brand,
    model,
    price
}) => {

return (
    <div className={styles.cardWrapper}>
        <div className={styles.imgContainer}>
            <img className={styles.productImg} src={img} />
        </div>
        <div className={styles.productInfo}>
            <h3>{model}</h3>
            <h4>{brand}</h4>
            <div className={styles.priceContainer}>
                <p className={styles.productPrice}>{price} €</p>
            </div>
        </div>
        <button className={styles.addCartBtn}>Add to cart</button>
    </div>
)
}