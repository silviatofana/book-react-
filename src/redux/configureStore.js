import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryRed from './categories/categories';
import reduceBook from './books/books';

const rootReducer = combineReducers({
  books: reduceBook,
  category: categoryRed,
});
const store = configureStore({ reducer: rootReducer });

export default store;

