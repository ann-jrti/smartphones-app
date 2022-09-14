import axios from 'axios';

export const addProductToCart = async () => {
    try {
        await axios.post('https://front-test-api.herokuapp.com/api/cart')
    } catch (error) {
        console.error(error)
    }
}