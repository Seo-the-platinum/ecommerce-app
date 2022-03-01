//import slice method from redux toolkit
import { createSlice } from '@reduxjs/toolkit'

//create slice using method and export the slice
export const searchSlice = createSlice({
  //name of slice
  name: 'search',
  //set initial state, takes an object with a key of value
  initialState: {
    value: undefined,
  },
  //create reducers to update state.
  reducers: {
    updateSearch: (state, searchTerm)=> {
      state.value = searchTerm
    }
  }
})

// export the updateSearh actions so it can be used by components
export const { updateSearch } = searchSlice.actions
// export the slice reducer
export default searchSlice.reducer
