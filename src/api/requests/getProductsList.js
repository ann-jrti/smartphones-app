import axios from 'axios';

export const getProductsList = async () => {
    try {
        const response = await axios.get('https://front-test-api.herokuapp.com/api/product')
        return response
    } catch (error) {
        console.error(error)
    }
}