import { v4 as uuidv4 } from 'uuid';

const addBook = '/react-bookstore/books/addBook';
const removeBook = '/react-bookstore/books/removeBook';
const initialState = [];

const reduceBook = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return [...state, action.info];
    case removeBook:
      return [...state.filter((book) => book.title !== action.info.title)];
    default:
      return state;
  }
};

const addingBook = () => ({
  type: addBook,
  info: {
    title: 'new book',
    author: 'new author',
    id: uuidv4(),
  },
});

const removingBook = () => ({
  type: removeBook,
  info: {
    title: 'new book',
  },
});
export default reduceBook;
export { addingBook, removingBook };
