import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``
    }
}


export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials)
        token.set(data.token)
        return data
    } catch (error) {
        alert('This user is exsist')
    }
})

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials)
        token.set(data.token)
        return data
    } catch (error) {
        alert('Fail, try again!')
    }
})

export const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
        const { data } = await axios.post('/users/logout', credentials)
        token.unset()
        return data
    } catch (error) {

    }
})


export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistToken = state.auth.token
    if (persistToken === null)
        return thunkAPI.rejectWithValue('Error')
    token.set(persistToken)
    try {
        const { data } = await axios.get('/users/current')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})