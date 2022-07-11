import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="Navbar">
      <div className="Nav1">
        <header>
          <h1>Bookstore CMS</h1>
        </header>
        <ul className="Links">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <FaUserCircle />
    </nav>
  );
};

export default Navbar;
