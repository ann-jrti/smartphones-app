import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../../cookies';
import { getSmartphoneDetails } from '../../state/smartphones/smartphonesThunk';
import { SmartphoneActions, SmartphoneDescription } from './components';
import styles from './SmartphoneDetails.module.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const SmartphoneDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        <>
            {alreadyCheckedSmartphone && 
                <section
                    className={styles.pdp}
                    style={{display: 'flex', gap: '50px;'}}
                    >
                    <div className={styles.imgBtnWrapper}>
                        <button
                            className={styles.goBackBtn}
                            onClick={() => navigate('/')}
                            >
                            <Typography
                                style={{display: 'flex'}}
                                variant='body1'
                                >
                                    <span>
                                        <ArrowBackIosIcon style={{color: '#606C38'}} />
                                    </span>Go back
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
                </section> 
            }
        </>
    )
}