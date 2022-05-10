import { createSlice } from '@reduxjs/toolkit'

export const firebaseItemSlice = createSlice({
    name:'items',
    initialState: {
        value: []
    },
    reducers: {
        updateItems: (state, items)=> {
            state.value = items
        }
    }
})

export const { updateItems } = firebaseItemSlice.actions
export default firebaseItemSlice.reducer