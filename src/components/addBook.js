import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');
  const [bookCategory, setCategory] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    const newBook = {
      id: uuidv4(),
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');

    e.preventDefault();
  };

  return (
    <div className="Form">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore} className="FormInput">
        <input
          type="text"
          placeholder="Author name"
          value={bookAuthor}
          onChange={handleAuthorChange}
          className="author-name"
        />
        <br />
        <input
          type="text"
          placeholder="Book title"
          value={bookTitle}
          onChange={handleTitleChange}
          className="book-title"
        />
        <br />
        <select
          className="categories"
          name="categories"
          id="categories"
          value={bookCategory}
          onChange={handleCategoryChange}
        >
          <option defaultValue="">Category</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <br />
        <button className="submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
