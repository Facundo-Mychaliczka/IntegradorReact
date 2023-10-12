import axios from 'axios'



const BASE_URL = 'https://nucbaz-api.vercel.app/'



export const createUser = async (nombre, email, password) => {

    try {
        const response = await axios.post(`https://nucbaz-api.vercel.app/auth/register`, {
            nombre,
            email,
            password
        })
        return response.data
    } catch (error) {
        return alert(error)
    }
}