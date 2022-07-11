import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = '/react-bookstore/books/addBook';
const REMOVE_BOOK = '/react-bookstore/books/removeBook';
const initialState = [{
  id: uuidv4(),
  title: 'Book1 Title',
  author: 'Book1 Author',
  category: 'Fiction',
  progress: 70,
  currentChapter: 'chapter 4',
},
{
  id: uuidv4(),
  title: 'Book2 Title',
  category: 'Religion',
  author: 'Book2 Author',
  progress: 20,
  currentChapter: 'chapter 4',
},
{
  id: uuidv4(),
  title: 'Book3 Title',
  author: 'Book3 Author',
  category: 'Romance',
  progress: 82,
  currentChapter: 'chapter 5',
}];

const reduceBook = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.bookid)];
    default:
      return state;
  }
};

const addingBook = (newBook) => ({
  type: ADD_BOOK,
  payload: {
    title: newBook.title,
    author: newBook.author,
    id: uuidv4(),
    category: newBook.category,
    progress: Math.floor(Math.random() * 100),
    currentChapter: `Chapter ${Math.floor(Math.random() * 15)}`,
  },
});

const removingBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    bookid: id,
  },
});
export { addingBook, removingBook };
export default reduceBook;
