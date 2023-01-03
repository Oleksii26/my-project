import { createSlice } from "@reduxjs/toolkit";
import { addContacts, fetchContacts, removeContact } from "./contactsOperations.jsx";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoadin: false,
        error: null
    },
    extraReducers: {
        [addContacts.fulfilled](state, action) {
            state.isLoadin = false
            state.error = null
            state.contacts.push(action.payload)
        },
        [fetchContacts.pending](state) {
            state.isLoadin = false
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoadin = false
            state.error = null
            state.contacts = action.payload
        },
        [fetchContacts.rejected](state) {
            state.isLoadin = true
        },
        [removeContact.pending](state, action) {
            state.isLoadin = true
        },
        [removeContact.fulfilled](state, action) {
            state.error = null
            state.isLoadin = false
            state.contacts = state.contacts.filter(e => e.id !== action.payload.id)
        },
        [removeContact.rejected](state, action) {
            state.isLoadin = false
            state.error = action.payload
        },
    }
})

export const contactsReducer = contactsSlice.reducer
