import axios from 'axios'
const apiURL = import.meta.env.VITE_REACT_APP_URL_API


export const getDishes = async() => {
    try {
        const response = await axios.get(apiURL)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const postDish = async(data) => {
    try {
        const response = await axios.post(apiURL, data)
        return response.data
    } catch (error) {
        console.log(error)  
    }
}