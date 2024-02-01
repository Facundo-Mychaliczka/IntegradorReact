import {createSlice} from '@reduxjs/toolkit'


const INITIAL_STATE = {
    currentUser: null,
}


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null
    },
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
        }
    }
})

export const {setCurrentUser, logOut} = userSlice.actions

export default userSlice.reducer;