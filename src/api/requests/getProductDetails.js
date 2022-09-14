import axios from 'axios';

export const getProductDetails = async (id) => {
    try {
        const response = await axios.get(`https://front-test-api.herokuapp.com/api/product/${id}`)
        return response
    } catch (error) {
        console.error(error)
    }
}