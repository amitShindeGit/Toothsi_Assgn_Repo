import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducer/productReducer';

export default configureStore({
  reducer: {
     productReducer
},
})