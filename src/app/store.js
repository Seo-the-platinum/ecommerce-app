import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/userSlice'
import itemReducer from '../features/item/itemSlice'
import searchReducer from '../features/search/searchSlice'
import orderReducer from '../features/order/OrderSlice'
import firebaseItemsReducer from '../features/firebaseItems/firebaseItemsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    item: itemReducer,
    search: searchReducer,
    order: orderReducer,
    items: firebaseItemsReducer
  },
})
