import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage on initial state
const loadCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      const serializedCart = localStorage.getItem('cart');
      if (serializedCart === null) {
        return [];
      }
      return JSON.parse(serializedCart);
    } catch (err) {
      return [];
    }
  }
  return [];
};

// Save cart to localStorage
const saveCartToLocalStorage = (cartItems) => {
  if (typeof window !== 'undefined') {
    try {
      const serializedCart = JSON.stringify(cartItems);
      localStorage.setItem('cart', serializedCart);
    } catch (err) {
      console.error('Could not save cart to localStorage', err);
    }
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      
      // Check if product already exists in cart by productId (not id)
      const existingItemIndex = state.items.findIndex(
        (item) => item.productId === newItem.productId
      );

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        state.items[existingItemIndex].quantity += newItem.quantity;
      } else {
        // New item, add to cart
        state.items.push(newItem);
      }

      // Save to localStorage
      saveCartToLocalStorage(state.items);
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      
      // Save to localStorage
      saveCartToLocalStorage(state.items);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      
      if (item && quantity > 0) {
        item.quantity = quantity;
      }

      // Save to localStorage
      saveCartToLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      
      // Save to localStorage
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemCount = (state) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;