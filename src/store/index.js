import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
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
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};
