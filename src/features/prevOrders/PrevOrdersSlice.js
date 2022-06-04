import { createSlice } from '@reduxjs/toolkit'

export const prevOrdersSlice = createSlice({
    name: 'prevOrders',
    initialState: {
        value: []
    },
    reducers: {
        updateOrders: (state, action)=> {
            state.value.push(action.payload)
        }
    }
})

export const { updateOrders } = prevOrdersSlice.actions
export default prevOrdersSlice.reducer