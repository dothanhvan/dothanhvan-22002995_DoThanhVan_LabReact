import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // [{ id, name, price, quantity }]
    totalQuantity: 0,
    totalPrice: 0
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload; // { id, name, price }
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find(i => i.id === itemId);
      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.price * existingItem.quantity;

      state.items = state.items.filter(i => i.id !== itemId);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (!item) return;

      const quantityDiff = quantity - item.quantity;
      const priceDiff = quantityDiff * item.price;

      item.quantity = quantity;
      state.totalQuantity += quantityDiff;
      state.totalPrice += priceDiff;
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
