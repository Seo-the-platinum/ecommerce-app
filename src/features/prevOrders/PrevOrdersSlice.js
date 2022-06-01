import { createSlice } from '@reduxjs/toolkit'

export const prevOrdersSlice = createSlice({
    name: 'prevOrders',
    initialState: {
        value: []
    },
    reducers: {
        orders: (state, action)=> {
            state.value.push(action.payload)
        }
    }

})

export const { orders } = prevOrdersSlice.actions
export default prevOrdersSlice.reducer