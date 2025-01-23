import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <h1>News App</h1>
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
      </div>

      <ul className={isMenuOpen ? "nav-links nav-links-active" : "nav-links"}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/technology" onClick={toggleMenu}>Technology</Link></li>
        <li><Link to="/sports" onClick={toggleMenu}>Sports</Link></li>
        <li><Link to="/business" onClick={toggleMenu}>Business</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
