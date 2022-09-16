import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setFilteredSmartphones, smartphonesListSelector } from '../../../state/smartphones/smartphonesSlice';
import styles from './SearchBar.module.scss';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    const allSmartphones = useSelector(smartphonesListSelector);
    const dispatch = useDispatch();

    const filter = (e) => {
        const newFilter = allSmartphones.filter(s =>
          s.model.toLowerCase().includes(e.target.value.toLowerCase())
          || s.brand.toLowerCase().includes(e.target.value.toLowerCase())
        );
        
        if (newFilter) {
            dispatch(setFilteredSmartphones(newFilter))
          }  
        };

    return(
        <div className={styles.searchBarContainer}>
        <SearchIcon style={{color: '#BC6C25'}} />
          <input
            className={styles.searchBarInput}
            onChange={filter}
            type="text"
            placeholder="Search for brand or model"
          ></input>
      </div>
    )
}