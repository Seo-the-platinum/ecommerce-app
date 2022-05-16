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
            const updatedOrder = state.value.filter(item => item.id !== action.payload)
            state.value= [...updatedOrder]
        },

        updateItem: (state, action) => {
            const toUpdate = state.value.find(item=> item.id === action.payload.id)
            toUpdate.amount = action.payload.amount
        }
    }

})

export const { addItem, removeItem, updateItem } = orderSlice.actions

export default orderSlice.reducer