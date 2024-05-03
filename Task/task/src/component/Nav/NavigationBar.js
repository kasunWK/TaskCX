import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-options">
        <img src='./img/logo.png' alt='logo'/>
        <a href="/about-us">ABOUT US</a>
        <a href="/math">MATH</a>
      </div>
      <div className="nav-contact">
        <img src='./img/contact.png' alt='contact information image'/>
      </div>
      <Link to="/" className="login-button">Login</Link>
    </nav>
  );
};

export default NavigationBar;



