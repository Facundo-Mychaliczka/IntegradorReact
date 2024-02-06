import axios from "axios"

const BASE_URL = 'https://api-back-facundo-mychaliczka.vercel.app/'

export const postOrder = async (order, currentUser)=> {

    try {
        const response = await axios.post(`${BASE_URL}orders`, order, {
            headers: {
                "xtoken": currentUser.token
            },
        })
        return console.log(response);
    } catch (error) {
        return alert (error.response.msg)
    }
}

// export const getOrders = async (currentUser)=> {

//     try {
//         const orders = await axios.get(`${BASE_URL}orders`,{
//             headers: {
//                 "xtoken": currentUser.token
//             },
//         })
//         return response.data
//     } catch (error) {
//         return alert (error.response.data.msg)
//     }
// }