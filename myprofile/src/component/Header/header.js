import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo"><span>Paridhi's Portfolio</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
