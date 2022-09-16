import { getProductDetails, getProductsList } from '../../api/requests';
import { setCookie } from '../../cookies';
import { setSmarthonesList, setSmartphoneDetails } from './smartphonesSlice';

export const getSmartphones = () => (
    async dispatch => {
        const smartphones = await getProductsList()
        if (smartphones) {
            dispatch(setSmarthonesList(smartphones.data))
            localStorage.setItem('smartphones', JSON.stringify(smartphones.data))
        }
    }
);

export const getSmartphoneDetails = (id) => (
    async dispatch => {
        const smartphones = await getProductDetails(id)
        if (smartphones) {
            dispatch(setSmartphoneDetails(smartphones.data))
            setCookie(id, JSON.stringify(smartphones.data))
            console.log('thunk')
        }
    }
);
