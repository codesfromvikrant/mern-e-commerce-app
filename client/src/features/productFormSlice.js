import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  name: '',
  label: '',
  description: '',
  price: '',
  discount: '',
  tax_charge: false,
  in_stock: true,
};

const productFormSlice = createSlice({
  name: 'productForm',
  initialState,
  reducers: {
    updateProductForm(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetProductForm(state) {
      return initialState;
    },
  },
});

export const { updateProductForm, resetProductForm } = productFormSlice.actions;

export default productFormSlice.reducer;