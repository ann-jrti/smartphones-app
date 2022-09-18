import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../../cookies';
import { smartphoneDetailsSelector } from '../../state/smartphones/smartphonesSlice';
import { getSmartphoneDetails } from '../../state/smartphones/smartphonesThunk';
import { SmartphoneActions, SmartphoneDescription } from './components';
import styles from './SmartphoneDetails.module.scss'

export const SmartphoneDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentSmartphone = useSelector(smartphoneDetailsSelector)
    console.log(currentSmartphone)
    let alreadyCheckedSmartphone;
    if (getCookie(id)) {
        alreadyCheckedSmartphone = JSON.parse(getCookie(id))
    }

    useEffect(() => {
        if (!alreadyCheckedSmartphone) {
            dispatch(getSmartphoneDetails(id))
        } 
    }, [dispatch])

    return (
        <section>
            {alreadyCheckedSmartphone && 
                <div className={styles.pdp}>
                    <div className={styles.goBackBtnWrapper}>
                        <button
                            className={styles.goBackBtn}
                            onClick={() => navigate('/')}
                            >
                            <Typography variant='body1'>
                                <span>←</span>Go back
                            </Typography>
                        </button>
                            <div className={styles.productImgContainer}>
                                <img src={alreadyCheckedSmartphone.imgUrl} />
                                <h3>{alreadyCheckedSmartphone.brand}</h3>
                            </div>
                    </div>
                    
                    <div className={styles.productDetails}>
                        <SmartphoneDescription {...alreadyCheckedSmartphone} />

                        <div className={styles.actionsContainer}>
                            <SmartphoneActions
                                id={alreadyCheckedSmartphone.id}
                                colors={alreadyCheckedSmartphone.options.colors}
                                storages={alreadyCheckedSmartphone.options.storages}
                                price={alreadyCheckedSmartphone.price}
                            />
                        </div>
                    </div>
                </div> 
            }
        </section>
    )
}