import { createAction, createReducer } from '@reduxjs/toolkit';

// const initialState = [
//   { name: 'Purple Geode', category: 'geodes', price: 699.00, inStock: 30, image: './assets/purple-geode.avif' },
//   { name: 'Opal', category: 'gemstones', price: 99.00, inStock: 15, image: './assets/opal.jpg' },
//   { name: 'Ruby', category: 'gemstones', price: 9.00, inStock: 6, image: './assets/ruby.avif' },
//   { name: 'Tiger\'s Eye', category: 'gemstones', price: 9.00, inStock: 6, image: './assets/tigers-eye.jpg' },
//   { name: 'Jade', category: 'gemstones', price: 9.00, inStock: 6, image: './assets/jade.jpg' },
//   { name: 'Megaladon Tooth', category: 'fossils', price: 12.00, inStock: 10, image: './assets/megaladon-tooth.jpg' },
//   { name: 'Trilobyte', category: 'fossils', price: .99, inStock: 42, image: './assets/trilobyte.jpg' },
//   { name: 'Mammoth Tusk', category: 'fossils', price: 1.99, inStock: 3, image: './assets/mammoth-tusk.jpg' },
//   { name: 'Velociraptor Claw', category: 'fossils', price: 1.99, inStock: 3, image: './assets/velociraptor-claw.jpg' },
//   { name: 'Fossilized Shell', category: 'fossils', price: 1.99, inStock: 3, image: './assets/fossil-shell.jpg' },
//   { name: 'Obsidian', category: 'rocks', price: 2.39, inStock: 90, image: './assets/obsidian.jpg' },
//   { name: 'Basalt', category: 'rocks', price: 2.39, inStock: 90, image: './assets/basalt.jpg' },
//   { name: 'Limestone', category: 'rocks', price: 2.39, inStock: 90, image: './assets/limestone.jpg' },
// ];


const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

const setProducts = createAction(SET_PRODUCTS);

export const getProducts = () => async (dispatch, getState) => {
  const response = await fetch('https://api-js401.herokuapp.com/api/v1/products').then(res => res.json());
  console.log('🚀 ~ file: products.js:27 ~ getProducts ~ response', response);
  dispatch(setProducts(response.results));
};

const reducer =  createReducer(
  [],
  {
    [SET_PRODUCTS]: (state, action) => action.payload,
    [ADD_PRODUCT]: (state, action) => [...state, action.payload],
  },

);

export default reducer;
