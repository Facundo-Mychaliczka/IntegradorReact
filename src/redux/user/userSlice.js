import {createSlice} from '@reduxjs/toolkit'


const INITIAL_STATE = {
    currentUser: null,
}


const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload,
            };
        },
        logOut: (state) => {
            return {
                ...state,
                currentUser: null,
            }
        },
        setVerify: (state, action) => {
            return {
                ...state,
                verified: action.payload,
            }
        }
    }
})

export const {setCurrentUser, logOut, setVerify} = userSlice.actions

export default userSlice.reducer;