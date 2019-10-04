import React, { useState } from 'react';
import useDarkMode from './hooks/DarkMode';
import './App.css';


const Navbar = (theme) => {
  const [darkMode, setDarkMode] = useDarkMode('theme');


    const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav data-testid="nav" className="navbar">
      <h1>Soccer Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;