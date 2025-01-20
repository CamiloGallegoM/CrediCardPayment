import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProducts } from '../../interfaces/cartInterface';

const initialState: CartProducts = {
  products: [],
  quantityProducts: 0,
  totalPay: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartPay(state, action: PayloadAction<CartProducts>) {
      state.products = action.payload.products;
      state.quantityProducts = action.payload.quantityProducts;
      state.totalPay = action.payload.totalPay;
    },
    resetCart(state) {
      return initialState;
    },
  },
});

export const { setCartPay, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
