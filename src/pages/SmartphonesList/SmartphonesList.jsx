import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getProductsList } from '../../api/requests';
import { smartphonesListSelector } from '../../state/smartphones/smartphonesSlice';
import { getSmartphones } from '../../state/smartphones/smartphonesThunk';
import { SmartphoneCard } from './components';

import styles from './SmartphonesList.module.scss';

export const SmartphonesList = () => {
    const smartphonesList = useSelector(smartphonesListSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (smartphonesList.length === 0) {
            dispatch(getSmartphones())
            console.log(smartphonesList)
        }
    }, [dispatch])

    return(
        <section className={styles.productsWrapper}>
        <p>hi</p>
        {smartphonesList.map(product => {
            return(
                <SmartphoneCard
                    key={product.id}
                    img={product.imgUrl}
                    brand={product.brand}
                    model={product.model}
                    price={product.price}
                />
            )
        })} 
        </section>
        
        
    )
}
