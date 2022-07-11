import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Options = ({ id }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="book-options">
      <a href="/#">Comments</a>
      {' | '}
      <a href="/#" onClick={remove}>Remove</a>
      {' | '}
      <a href="/#">Edit</a>
    </div>
  );
};

Options.propTypes = ({
  id: PropTypes.string.isRequired,
});

export default Options;
