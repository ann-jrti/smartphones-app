import axios from 'axios';

export const addProductToCart = async (data) => {
    try {
        const response = await axios.post('https://front-test-api.herokuapp.com/api/cart', data)
        return response
    } catch (error) {
        console.error(error)
    }
}