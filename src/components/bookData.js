import React from 'react';
import PropTypes from 'prop-types';

const BookData = ({ category, title, author }) => (
  <div>
    <p>{category}</p>
    <p>{title}</p>
    <p>{author}</p>
  </div>
);

BookData.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookData;
