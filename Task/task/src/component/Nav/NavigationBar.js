import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-options">
        <a href="/about-us">ABOUT US</a>
        <a href="/math">MATH</a>
      </div>
      <div className="nav-contact">
        +9180127457125
      </div>
      <Link to="/" className="login-button">Login</Link>
    </nav>
  );
};

export default NavigationBar;



