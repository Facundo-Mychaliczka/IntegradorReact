import axios from 'axios'



const BASE_URL = 'https://nucbaz-api.vercel.app/'



export const createUser = async (nombre, email, password) => {

    try {
        const response = await axios.post(`${BASE_URL}auth/register`, {
            nombre,
            email,
            password
        })
        console.log(response.data);
    } catch (error) {
        return alert(error)
    }
}