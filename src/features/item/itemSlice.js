import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    value: 'all'
  },
  reducers: {
    updateItem: (state, action)=> {
      state.value = action.payload
    }
  }
})

export const { updateItem } = itemSlice.actions

export default itemSlice.reducer
