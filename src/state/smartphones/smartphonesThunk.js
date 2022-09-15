import { getProductDetails, getProductsList } from '../../api/requests';
import { setCookie } from '../../cookies';
import { setSmarthonesList, setSmartphoneDetails } from './smartphonesSlice';


export const getSmartphones = () => (
    async dispatch => {
        // dispatch(setLoading(true));
        const smartphones = await getProductsList()
        if (smartphones) {
            dispatch(setSmarthonesList(smartphones.data))
            localStorage.setItem('smartphones', JSON.stringify(smartphones.data))
        }
        // dispatch(setLoading(false));
    }
);

export const getSmartphoneDetails = (id) => (
    async dispatch => {
        // dispatch(setLoading(true));
        const smartphones = await getProductDetails(id)
        if (smartphones) {
            dispatch(setSmartphoneDetails(smartphones.data))
            setCookie(id, JSON.stringify(smartphones.data))
        }
        // dispatch(setLoading(false));
    }
);
