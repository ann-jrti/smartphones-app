
import { getProductsList } from '../../api/requests';
import { setSmarthonesList } from './smartphonesSlice';

export const getSmartphones = () => (
    async dispatch => {
        // dispatch(setLoading(true));
        const smartphones = await getProductsList()
        if (smartphones) dispatch(setSmarthonesList(smartphones.data))
        localStorage.setItem('smartphones', JSON.stringify(smartphones.data))
        // dispatch(setLoading(false));
    }
);
