import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand>
        <img src='./img/logo.png' alt='logo' className='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about-us">
            <Button variant="primary" className='nav-button'>ABOUT</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/math">
            <Button variant="primary" className='nav-button'>MATH</Button>
          </Nav.Link>
        </Nav>
        <div>
          <img src='./img/contact.png' alt='contact-info' className='contact-i'/>
        </div>
      </Navbar.Collapse>
      <Link to="/" className="login-button">
        <Button variant="outline-primary">Login</Button>
      </Link>
    </Navbar>
  );
};

export default NavigationBar;
