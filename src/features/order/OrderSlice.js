import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        value: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload)
        },

        removeItem: (state, action) => {
            state.value.filter(item => item.id !== action.id)
        },

        updateItem: (state, action) => {
            const toUpdate = state.value.find(id=> id === action.id)
            return toUpdate.amount + action.amount
        }
    }

})

export const { addItem, removeItem, updateItem } = orderSlice.actions

export default orderSlice.reducer