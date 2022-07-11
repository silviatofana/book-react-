import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './components/bookstore.css';
import Bookstore from './components/bookstore';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Bookstore />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
