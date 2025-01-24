import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>This is Paridhi – A passionate web developer driven by creativity and innovation.</p>
        <button><a href="#projects">Check out my work</a></button> 
        <button><a href='Paridhi_Kapoor.pdf'>View My CV</a></button>
      </div>
    </header>
  );
}

export default Header;
