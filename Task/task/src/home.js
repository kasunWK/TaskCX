import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/Nav/NavigationBar';
import Footer from './component/Footer/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './home.css'

const Home = () => {
  return (
    <div>
        <NavigationBar></NavigationBar>
    <div className="container-fluid bg-light p-5 text-center">
    <Row>
        <Col lg={6} md={12} className="d-flex align-items-center justify-content-center">
          <div>
            <h1 className="mb-4"><strong>Making Kids Fall in Love with Math!</strong></h1>
            
            <div className="mb-3">
            <p className='topic'><strong>BOOK YOUR FREE CLASS WITH AGE GROUP</strong></p>
              <Button variant="outline-primary" className="m-2">age - 3</Button>
              <Button variant="outline-primary" className="m-2">age - 4</Button>
              <Button variant="outline-primary" className="m-2">age - 5</Button>
              <Button variant="outline-primary" className="m-2">age - 7</Button>
              <Button variant="outline-primary" className="m-2">age - 7</Button>
              <Button variant="outline-primary" className="m-2">age - 8</Button>
            </div>

            <Button variant="warning" size="lg" className="mb-3" style={{ backgroundColor: '#ffffff' }}>BOOK A FREE LIVE CLASS</Button>
            <p className="text-success"><strong className='price'>₹0</strong> For First Class<strong>  100% Off</strong></p>
            <p className="text-success" style={{color:'#ffffff'}}>Booked a demo already?<strong style={{color:'#FF7C3B'}}> Join now</strong></p>
          </div>
        </Col>

        <Col lg={6} md={12} className="d-flex align-items-center justify-content-center">
          <div className="illustration">
            <img src='./img/super-kid.png' className="img-fluid" alt="Super Kid Illustration" />
          </div>
        </Col>
      </Row>
    </div>

    <div className="container my-5">
      <h1 className="text-center mb-4">Adaptive learning path + best teachers = Math mastery</h1>
      <p className="text-center text-secondary mb-5 text-black">The guaranteed formula to be a Math wizard</p>
      
      <div className="row">
        <div className="col-md-3 sm-6 mb-4" >
          <div className="card h-100"style={{ backgroundColor: '#FCE4EC' }}>
            <div className="card-body" >
              <h5 className="card-title text-primary">Professional Curriculum Helps Parents Rest Easy</h5>
              <ul className="card-text">
                <li>Systematic curriculum for kids ages</li>
                <li>Interactive AI content fosters and maintains kids' interest in learning</li>
                <li>Immersive classes with interactive learning experiences</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 sm-6 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#FFF0CB' }}>
            <div className="card-body">
              <h5 className="card-title text-warning">Personal Mentoring Service</h5>
              <ul className="card-text">
                <li>Your mentor provides 1-on-1 mentoring at any time</li>
                <li>Daily reports keep you up to date on your child's learning</li>
                <li>Instant feedback keeps kids encouraged and motivated</li>
              </ul>
            </div>
          </div>
        </div>
    
        <div className="col-md-3 sm-6 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#EBF2FF' }}>
            <div className="card-body">
              <h5 className="card-title text-success">A Math Learning App Kids Crave</h5>
              <ul className="card-text">
                <li>Developed by early education specialists from Ivy League and other top universities</li>
                <li>Progressive learning pathways thoughtfully developed for each child</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3 sm-6 mb-4">
            <div className="card-body">
              <img src='./img/Group6.png' className='Group6' alt='student image'/>
            </div>
        </div>

      </div>
    </div>

    <div className="container bg-peach text-center p-5">
      <h1 className="text-black">Cultivate Thinking Skills From All Aspects</h1>
      <p className="text-grey">Our Expert Advisors Can Help You Find The Right Workspace Solution For You And Your Team</p>
      <div className="btn-group my-3">
        <button className="btn btn-orange">S2 <small>3-4 Years Old</small></button>
        <button className="btn btn-orange">S3 <small>5 Years Old</small></button>
        <button className="btn btn-orange">S4 <small>6 Years Old</small></button>
      </div>
      <div className="row justify-content-center align-items-center my-5">
        
      </div>
      <div className="row">
        <Col>
          <img src='./img/our-class.png' className='ourclass' alt='our_class '/>
        </Col>

        <Col className='subject'>
        <div className="col-md-12 d-flex align-items-center">
          <img src='./img/image11.png' alt="Image" style={{ maxWidth: '200px', marginRight: '20px' }} />
          <div>
            <h3>Number Sense & Operations</h3>
            <p>Fluently compose and decompose numbers within 10. Understand addition and subtraction within 10.</p>
          </div>
        </div>
          <div className="col-md-12 d-flex align-items-center">
          <img src='./img/image12.png' style={{ maxWidth: '200px', marginRight: '20px' }}/>
            <div>
              <h3>Geometry</h3>
              <p>Recognize 2D and 3D shapes Identify defining attributes of shapes (edges, vertices, sides, reflection, etc.)</p>
            </div>
          </div>
          <div className="col-md-12 d-flex align-items-center">
          <img src='./img/image13.png' style={{ maxWidth: '200px', marginRight: '20px' }} />
            <div>
              <h3>Logic and Patterns</h3>
              <p>Use analogical reasoning to solve Sudoku puzzles and understand the concept of cycles.</p>
            </div>
          </div>
          <div className="col-md-12 d-flex align-items-center">
            <img  src='./img/image14.png' style={{ maxWidth: '200px', marginRight: '20px' }}/>
            <div>
              <h3>Problem Solving</h3>
              <p>Learn tangram puzzles and practice creating shapes using tangram pieces.</p>
            </div>
          </div>
        </Col>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;
