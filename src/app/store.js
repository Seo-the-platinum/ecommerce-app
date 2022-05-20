import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import itemReducer from '../features/item/itemSlice'
import searchReducer from '../features/search/searchSlice'
import orderReducer from '../features/order/OrderSlice'
import firebaseItemsReducer from '../features/firebaseItems/firebaseItemsSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    item: itemReducer,
    search: searchReducer,
    order: orderReducer,
    items: firebaseItemsReducer
  },
})
