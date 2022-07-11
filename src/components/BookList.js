import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookStore = useSelector((store) => store.booksReducer);
  const oneBook = bookStore.map((book) => (
    <Book
      className="Book"
      key={book.id}
      id={book.id}
      author={book.author}
      title={book.title}
      category={book.category}
    />
  ));

  return (
    <div className="bookList">
      {oneBook}
    </div>
  );
};

export default BookList;
