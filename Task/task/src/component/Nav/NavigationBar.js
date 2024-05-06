import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand>
        <div>
          <div><img src='./img/logo.png' alt='logo' className='logo'/></div>
          <div><img src='./img/rocket.png' alt='image' className='rocket'/></div>
        </div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about-us">
            <Button variant="primary" className='nav-button'>ABOUT
              <img src='./img/cokie.png' alt='cokie icon' className='cokie'/>
            </Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/math">
            <Button variant="primary" className='nav-button'>MATH
              <img src='./img/cokie.png' alt='cokie icon' className='cokie'/>
            </Button>
          </Nav.Link>
        </Nav>

      </Navbar.Collapse>

      <div className="ml-auto">
      <img src='./img/contact.png' alt='contact-info' className='contact-icon' />
        <Link to="/" className="login-button">
          <Button variant="success">
          <img src='./img/star.png' style={{marginRight:'5px'}}/>
            Login
          </Button>
        </Link>

      </div>

    </Navbar>
  );
};

export default NavigationBar;
