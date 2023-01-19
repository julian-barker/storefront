import { createAction } from "@reduxjs/toolkit";
import { updateProductAction } from "./products";

const initialState = [];

const addAction = createAction('ADD');

export const addToCart = (product) => async (dispatch, getState) => {
  // console.log('🚀 ~ file: cart.js:9 ~ addToCart ~ product', product);
  const newStock = product.inStock - 1;
  
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inStock: newStock,
    }),
  };
  const response = await fetch(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, options).then(res => res.json());
  // console.log('🚀 ~ file: cart.js:12 ~ response', response);
  dispatch(addAction(response));
  dispatch(updateProductAction(response));
};
  

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'ADD':
      const cartItem = state.find(item => item.name === payload.name);
      if(cartItem) {
        const newCart = state.map(item => {
          if(item.name === payload.name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return newCart;
      }
      const newCartItem = { ...payload };
      delete newCartItem.inStock;
      delete newCartItem.category;
      newCartItem.quantity = 1;
      return [ ...state, newCartItem];
    case 'REMOVE':
      return state.filter(item => item.name !== payload.name);
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}