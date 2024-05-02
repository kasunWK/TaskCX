import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
  return (
    <footer className="footer bg-success text-white">
      <Container>
        <Row>
          <Col md={3}>
            <h5 style={{ marginTop: '25px' }}>Creta Class</h5>
            <div>
              <Row><img src="./img/playStoreRB.png" className='playStore' alt="Play Store" /></Row>
              <Row><img src="./img/appStoreRB.png" className='appStore' alt="App Store" /></Row>
            </div>
            <div className="certified">
              <h6>Certified</h6>
              <div>
                <img src="./img/5star.png" className='CImage' alt="5 Stars" />
                <img src="./img/kidsafe.jpeg" className='CImage' alt="Kids FE" />
              </div>

              <div>
                <img src="./img/5star.png" className='CImage' alt="5 Stars" />
                <img src="./img/kidsafe.jpeg" className='CImage' alt="Kids FE" />
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div className="school">
              <h6 style={{ marginTop: '25px' }}>School</h6>
              <div className="table-responsive">
              <table class="table">
                    <tr>
                      <td>India</td>
                      <td>West Bengal</td>
                    </tr>  
                    <tr>
                      <td>Maharashtra</td>
                      <td>Thelangana</td>
                    </tr>
                    <tr>
                      <td>Bihar</td>
                      <td>Uttra Pradesh</td>
                    </tr> 
                    <tr>
                      <td>Gujrat</td>
                      <td>Tamil Nadu</td>
                    </tr> 
                    <tr>
                      <td>Karnataka</td>
                      <td>Rajasthan</td>
                    </tr> 
                    <tr>
                      <td>Andra Pradesh</td>
                      <td>Kerala</td>
                    </tr> 
                    <tr>
                      <td>Madhya Pradesh</td>
                      <td>Kid Store</td>
                    </tr>   
                  </table>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div className="math">
              <h6 style={{ marginTop: '25px' }}>Math</h6>
              <ul>
                <li>Numbers and Operations</li>
                <li>Geometry</li>
                <li>Logic and Patterns</li>
                <li>Problem Solving</li>
                <li>Measurement and Data</li>
                <li>Attention and Memory</li>
              </ul>
            </div>
          </Col>

          <Col md={3}>
            <h6 style={{ marginTop: '25px' }}>Contact Us</h6>
            <Row className="mb-3">
              <Col>
                <FacebookOutlinedIcon />
              </Col>
              <Col>
                <YouTubeIcon />
              </Col>
              <Col>
                <InstagramIcon />
              </Col>
            </Row>
            <Row>
              <Col className='text-left'>
                <CallIcon />
                <p>Mon-Sat 12.30-20.30</p>
                <p>+918069490068</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <hr />
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
