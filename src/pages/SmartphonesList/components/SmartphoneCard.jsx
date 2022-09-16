import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomBtn } from '../../../components/CustomBtn';
import styles from './SmartphoneCard.module.scss';

export const SmartphoneCard = ({
    img,
    brand,
    model,
    price,
    id
}) => {
    
    const navigate = useNavigate()
    const handleClick = () => navigate(`/${id}`);
    
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
                    <p className={styles.productPrice}>{price ? `${price}€` : 'Out of stock'}</p>
                </div>
            </div>
            <CustomBtn
                onChildClick={handleClick}
                text='View details'
            />
        </article>
    )
}