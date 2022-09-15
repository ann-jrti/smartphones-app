import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredSmartphonesSelector, smartphonesListSelector } from '../../state/smartphones/smartphonesSlice';
import { getSmartphones } from '../../state/smartphones/smartphonesThunk';
import { SmartphoneCard } from './components';

import styles from './SmartphonesList.module.scss';

export const SmartphonesList = () => {
    const smartphonesList = useSelector(smartphonesListSelector);
    const filteredSmartphones = useSelector(filteredSmartphonesSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (smartphonesList.length === 0) {
            dispatch(getSmartphones())
        }
        
    }, [])

    const renderList = (array) => {
        return array.map(product => {
            return(
                <SmartphoneCard
                    key={product.id}
                    id={product.id}
                    img={product.imgUrl}
                    brand={product.brand}
                    model={product.model}
                    price={product.price}
                />
            )
        })
    }

    return(
        <section className={styles.productsWrapper}>
        {filteredSmartphones.length !== 0 ? renderList(filteredSmartphones) : renderList(smartphonesList)} 
        </section>
        
        
    )
}
