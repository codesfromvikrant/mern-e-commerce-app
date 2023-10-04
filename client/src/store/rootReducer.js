import { combineReducers } from '@reduxjs/toolkit';
import productFormReducer from '../features/productFormSlice';

const rootReducer = combineReducers({
  product: productFormReducer,
});

export default rootReducer;