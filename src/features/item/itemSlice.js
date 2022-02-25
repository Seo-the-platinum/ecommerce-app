import { createSlice } from '@reduxjs/toolkit'

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    value: 'All'
  },
  reducers: {
    updateItem: (state, item)=> {
      state.value = item
    }
  }
})

export const { updateItem } = itemSlice.actions

export default itemSlice.reducer
