import { createAction, createReducer } from '@reduxjs/toolkit';

// const initialState = [
//   { name: 'fossils', displayName: 'Fossils' },
//   { name: 'gemstones', displayName: 'Gemstones' },
//   { name: 'geodes', displayName: 'Geodes' },
//   { name: 'rocks', displayName: 'Rocks' },
// ];

const SET_CATEGORIES = 'SET_CATEGORIES';

const setCategories = createAction(SET_CATEGORIES);

export const getCategories = () => async (dispatch, getState) => {
  const response = await fetch('https://api-js401.herokuapp.com/api/v1/categories').then(res => res.json());
  console.log('🚀 ~ file: categories.js:16 ~ response', response);
  dispatch(setCategories(response.results));
};

const reducer =  createReducer(
  [],
  {
    [SET_CATEGORIES]: (state, action) => action.payload,
  },

);

export default reducer;
