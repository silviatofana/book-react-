import { Link } from 'react-router-dom';
import './Books.css';

function Navbar() {
  return (
    <nav>
      <ul className="nav-content">
        <li>Bookstore CMS</li>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/Category">CATEGORY</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;
