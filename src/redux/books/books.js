import axios from 'axios';

const ADD_BOOK = '/react-bookstore/books/addBook';
const REMOVE_BOOK = '/react-bookstore/books/removeBook';
const getBookUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/48yLRiaTQ7Hf0y7r4Sqa/books';
const initialState = [];

const addingBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

// eslint-disable-next-line camelcase
const removingBook = (item_id) => ({
  type: REMOVE_BOOK,
  payload: {
    // eslint-disable-next-line camelcase
    bookid: item_id,
  },
});

const fetchBooks = () => async (dispatch) => {
  await axios.get(getBookUrl).then((response) => dispatch(addingBook(response.data)));
};

const postBook = (addingBook) => async (dispatch) => {
  await axios.post(getBookUrl, addingBook).then(() => dispatch(fetchBooks()));
};

// eslint-disable-next-line camelcase
const deleteBook = (id) => async (dispatch) => {
  await axios.delete(`${getBookUrl}/${id}`).then(() => dispatch(fetchBooks()));
};

const reduceBook = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const books = Object.entries(action.payload);
      return books.map((book) => ({
        id: book[0],
        ...book[1][0],
      }));
    }
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.bookid)];
    default:
      return state;
  }
};

export {
  addingBook, removingBook, postBook, fetchBooks, deleteBook,
};
export default reduceBook;
