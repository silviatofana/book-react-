import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/books';

export default function Form() {
  const itemId = uuidv4();
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');
  const [bookCategory, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookTitle === '' || bookAuthor === '') return;
    const newBook = {
      item_id: itemId,
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
    };
    dispatch(postBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Historical Fiction">Historical Fiction</option>
          <option value="Romance novel">Romance novel</option>
          <option value="Tragedy">Tragedy</option>
          <option value="Unknown">Unknown</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

