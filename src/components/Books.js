import React, { Component } from 'react';
import './Books.css';
import Forms from './Forms';
import Book from './Book';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Book />
        <Forms />
      </>
    );
  }
}
export default Books;
