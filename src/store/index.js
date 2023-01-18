import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import productsReducer from './products';
import categoriesReducer from './categories';
import activeCategoryReducer from './activeCategory';
import cartReducer from './cart';

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  activeCategory: activeCategoryReducer,
  cart: cartReducer,
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
};
