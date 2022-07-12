import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, author, genre, progress,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-card">
      <div className="book-left-section">
        <p className="book-genre">{genre}</p>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}</p>
        <ul className="book-btns">
          <li>Comments</li>
          <div className="line-vertical" />
          <li><button className="remove-btn" type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button></li>
          <div className="line-vertical" />
          <li>Edit</li>
        </ul>
      </div>
      <div className="book-middle-section">
        <div className="progressbar-container">
          <CircularProgressbar value={progress} />
        </div>
        <div>
          <p>{`${Math.floor(Math.random() * 100)}%`}</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-right-section">
        <p>CURRENT CHAPTER</p>
        <p>
          Chapter
          {` ${Math.floor(Math.random() * 10)}`}
        </p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
export default Book;
