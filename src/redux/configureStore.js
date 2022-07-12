import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoryRed from './categories/categories';
import reduceBook from './books/books';

const rootReducer = combineReducers({
  books: reduceBook,
  category: categoryRed,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;
