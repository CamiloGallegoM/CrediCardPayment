// src/store/slices/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/productInterface';

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    resetProducts(state) {
      state.products = [];
    },
  },
});

export const {  setProducts, resetProducts } = productSlice.actions;

export default productSlice.reducer;
