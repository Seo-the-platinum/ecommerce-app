import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/userSlice'
import itemReducer from '../features/item/itemSlice'
import searchReducer from '../features/search/searchSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    item: itemReducer,
    search: searchReducer,
  },
})
