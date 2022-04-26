import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        value: [],
    },
    reducers: {
        addItem: (state, action) => {
            console.log('trying to add...', state.value, action)
            state.value.push(action.payload)
        },

        removeItem: (state, action) => {
            state.filter(item => item.id !== action.payload.id )
        },

        updateItem: (state, action) => {
            const toUpdate = state.find(id=> id === action.id)
            return toUpdate.amount + action.amount
        }
    }

})

export const { addItem, removeItem, updateItem } = orderSlice.actions

export default orderSlice.reducer