import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.Title === action.payload.Title);

      if (itemIndex >= 0 ) {
        state.cartItems[itemIndex].cartTotalquantity += 1 ;
        alert(`Increased product quantity ${itemIndex}`);
      } else {
        const tempProduct = { ...action.payload, cartTotalquantity: 1 };
        state.cartItems.push(tempProduct);
        alert('Added product to cart');
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.cartTotalquantity, 0);
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.Title === action.payload.Title);

      if (action.payload.cartTotalquantity === 0) {
        state.cartItems.splice(itemIndex, 1);
      } else {
        state.cartItems[itemIndex].cartTotalquantity = action.payload.cartTotalquantity;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.cartTotalquantity, 0);
    },
    removeFromCart: (state, action) => {
      const updatedCartItems = state.cartItems.filter((item) => item.Title !== action.payload.Title);
      state.cartItems = updatedCartItems;
      alert('Removed product from cart', {
        position: 'bottom-left',
      });
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.cartTotalquantity, 0);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      localStorage.removeItem('cartItems');
    },
    getTotals: (state) => {
      state.cartTotalAmount = state.cartItems.map((product)=> product).reduce((total, item) => {
        return total + (item.Price * item.cartTotalquantity)
      }, 0)
    },
  },
});


export const { addToCart, updateQuantity, removeFromCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
