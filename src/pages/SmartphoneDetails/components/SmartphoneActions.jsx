import React from 'react';
import { useFormik } from 'formik'
import {
    InputLabel,
    Typography,
    MenuItem,
    Select,
    FormHelperText,
    FormControl
} from '@mui/material';

import styles from './SmartphoneActions.module.scss';
import { CustomBtn } from '../../../components/CustomBtn';
import { useDispatch } from 'react-redux';
import { getCart } from '../../../state/cart/cartThunk';

export const SmartphoneActions = ({colors, storages, id, price}) => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            id,
            colorCode: 'ewe',
            storageCode: 'ewe'
        },
        onSubmit: values => dispatch(getCart(values))
    })
    const setDefaultValue = (options) => {
        if (options.length === 1) {
            return options[0].code
        }
        return ''
    }

    const colorsDefaultValue = setDefaultValue(colors)
    const storagesDefaultValue = setDefaultValue(storages)

    const getMenuItems = (options) => {
        return options.map(option => {
            const { name, code } = option;
            return(
                <MenuItem
                    key={name}
                    value={code}
                    >
                    {name}
                </MenuItem>
            )
        })
    }
    const colorOptions = getMenuItems(colors)
    const storageOptions = getMenuItems(storages)
   
    return (
        <form
            onSubmit={formik.handleSubmit}
            className={styles.formWrapper}>
            <FormControl fullWidth>
                <InputLabel id="color">Select a color</InputLabel>
                    <Select
                        defaultValue={colorsDefaultValue}
                        required
                        className={styles.selectMenu}
                        name="colorCode"
                        value={formik.values.color}
                        label="Color"
                        onChange={formik.handleChange}
                       >
                        {colorOptions}
                        </Select>
                    <FormHelperText>Required</FormHelperText>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="storages">Select storage</InputLabel>
                    <Select
                        defaultValue={storagesDefaultValue}
                        required
                        className={styles.selectMenu}
                        name="storageCode"
                        value={formik.values.storages}
                        label="Storages"
                        onChange={formik.handleChange}
                    >
                        {storageOptions}
                    </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
    
            {price ?
            <CustomBtn text="Add to cart" />
            :  <Typography level='h4'>Out of stock</Typography>}
        </form>
    );
}