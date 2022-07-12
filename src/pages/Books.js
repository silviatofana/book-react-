import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Forms';

const Books = () => {
  const data = useSelector((state) => state.books);
  return (
    <div className="books-container">
      {data.map((e) => (
        <Book
          key={e.id}
          id={e.id}
          title={e.title}
          author={e.author}
          genre={e.category}
          currentChapter={e.currentChapter}
          progress={e.progress}
        />
      ))}
      <Form />
    </div>
  );
};
export default Books;