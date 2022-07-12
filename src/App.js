import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Category from './pages/Category';
import { fetchBooks } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </Router>

  );
}

export default App;
