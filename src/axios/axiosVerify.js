// import axios from "axios"

// const BASE_URL = 'https://api-back-facundo-mychaliczka.vercel.app/'

// export const verifyAccount = async (email, code)=> {

//     try {
//         const response = await axios.patch(`${BASE_URL}auth/verify`, {
//             email,
//             code
//         })
//         console.log(response.data);
//         return response.data
//     } catch (error) {
//         return alert (error.response.data.msg)
//     }
// }