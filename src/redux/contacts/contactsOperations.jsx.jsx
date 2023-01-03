import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const addContacts = createAsyncThunk('contacts/addContacts', async (text, thunkAPI) => {
    try {
        const { data } = await axios.post('/contacts', text)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const removeContact = createAsyncThunk('contacts/removeContacts', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${id}`)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})