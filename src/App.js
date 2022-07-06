import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Category from './components/Category';

function App() {
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
