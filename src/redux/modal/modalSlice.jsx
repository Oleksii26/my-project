import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false
    },
    reducers: {
        openModal(state) {
            state.isOpen = !state.isOpen
        }
    },
})

export const { openModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer
