import React from 'react';
import styles from './SmartphoneDescription.module.scss';

export const SmartphoneDescription = (props) => {
    const getCamerasFeatures = arr => {
        return(
            arr.map((features, i) => <p key={i}>{features}</p>)
        )
    }
    return (
        <div className={styles.descriptions}>
            <p><span>Model </span>{props.brand} {props.model}</p>

            <p><span>Price </span>{props.price} €</p>

            <p><span>CPU </span>{props.cpu}</p>

            <p><span>Operative System </span>{props.os}</p>

            <p><span>Resolution </span>{props.displayResolution}</p>

            <p><span>Battery </span>{props.battery}</p>

            <p><span>Primary camera </span>{typeof props.primaryCamera === 'object' ?
                        getCamerasFeatures(props.primaryCamera)
                        : props.primaryCamera}</p>

            <p><span>Secondary camera </span>{typeof props.secondaryCmera === 'object' ?
                        getCamerasFeatures(props.secondaryCmera)
                        : props.secondaryCmera}</p>

            <p><span>Dimentions </span>{props.dimentions}</p>

            <p><span>Weight </span>{props.weight} g</p>
        </div>)
}