import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-success text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Creta Class</h5>
        
            <div className="certified">
              <h6>Certified</h6>
        
            </div>
          </Col>
          <Col md={4}>
            <div className="school">
              <h6>School</h6>
            </div>
            <div className="math">
              <h6>Math</h6>
            </div>
          </Col>
          <Col md={4}>
            <h6>Contact Us</h6>
            
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            © RAFFLES QUAY #14-06 SINGAPORE(048581)
            <div>
              <a href="#" className="text-white">Privacy Policy</a> | 
              <a href="#" className="text-white">Children's Privacy Policy</a> | 
              <a href="mailto:support@cretaeclass.com">support@cretaeclass.com</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
