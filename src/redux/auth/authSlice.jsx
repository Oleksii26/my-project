import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, logIn, logOut, register } from "./authOperation";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedin: false,
            },
 
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedin = true
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedin = true
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null }
            state.token = null
            state.isLoggedin = false
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload
            state.isLoggedin = true
        }
    }
})

export const authReducer = authSlice.reducer