import React from 'react';
import styles from './SmartphoneCard.module.scss';
import Cookies from 'js-cookie'
const smartphonesCookie = Cookies.get('smartphones')
console.log(smartphonesCookie)
export const SmartphoneCard = ({
    img,
    brand,
    model,
    price
}) => {

return (
    <article className={styles.cardWrapper}>
        <div className={styles.imgContainer}>
            <img className={styles.productImg} src={img} />
        </div>
        <div className={styles.productInfo}>
        <div className={styles.brandContainer}>
            <h3>{model}</h3>
            <h4 className={styles.productBrand}>{brand}</h4>
        </div>
            <div className={styles.priceContainer}>
                <p className={styles.productPrice}>{price ? `${price}€` : 'Price not available'}</p>
            </div>
        </div>
        <button className={styles.addCartBtn}>Add to cart</button>
    </article>
)
}