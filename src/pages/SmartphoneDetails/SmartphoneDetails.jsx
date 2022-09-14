import React from 'react';
import { useParams } from 'react-router-dom';

export const SmartphoneDetails = () => {
    const pathParams = useParams();
    console.log(pathParams)
    return <div>product details</div>
}