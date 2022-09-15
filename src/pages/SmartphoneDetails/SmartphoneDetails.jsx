import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../cookies';
import { smartphoneDetailsSelector } from '../../state/smartphones/smartphonesSlice';
import { getSmartphoneDetails } from '../../state/smartphones/smartphonesThunk';
import { SmartphoneDescription } from './components';
import styles from './SmartphoneDetails.module.scss'

export const SmartphoneDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const smartphone = useSelector(smartphoneDetailsSelector)
    let alreadyCheckedSmartphone;
   
    if (getCookie(id)) {
        alreadyCheckedSmartphone = JSON.parse(getCookie(id))
    }
    console.log(smartphone)
    console.log(alreadyCheckedSmartphone)
    useEffect(() => {
        
        if (!alreadyCheckedSmartphone) {
            dispatch(getSmartphoneDetails(id))
        } 
    }, [id, alreadyCheckedSmartphone])

    return (
        <section className={styles.pdp}>
            {alreadyCheckedSmartphone && 
                <>
                    <div className={styles.productImgContainer}>
                        <img src={alreadyCheckedSmartphone.imgUrl} />
                        <h3>{alreadyCheckedSmartphone.brand}</h3>
                    </div>
                    <div className={styles.productDetails}>
                        <SmartphoneDescription {...alreadyCheckedSmartphone} />

                        <div className={styles.actionsContainer}>

                        </div>
                    </div>
                </>
            }
            
            
        </section>
    )
}