import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/Nav/NavigationBar';
import Footer from './component/Footer/Footer';

const Home = () => {
  return (
    <div>
        <NavigationBar></NavigationBar>
    <div className="container-fluid bg-light p-5 text-center">
      <h1 className="mb-4"><strong>Making Kids Fall in Love with Math!</strong></h1>
      <p>BOOK YOUR FREE CLASS WITH AGE GROUP</p>
      <div className="mb-3">
        <button className="btn btn-outline-primary m-2">age -3</button>
        <button className="btn btn-outline-primary m-2">age -4</button>
        <button className="btn btn-outline-primary m-2">age -5</button>
        <button className="btn btn-outline-primary m-2">age -7</button>
        <button className="btn btn-outline-primary m-2">age -8</button>
      </div>
      <button className="btn btn-warning btn-lg mb-3"style={{ backgroundColor: '#FF5733' }}>BOOK A FREE LIVE CLASS</button>
      <p className="text-success"><strong>For First Class 100% Off</strong></p>
      <div className="illustration">
      </div>
    </div>

    <div className="container my-5">
      <h1 className="text-center mb-4">Adaptive learning path + best teachers = Math mastery</h1>
      <p className="text-center text-secondary mb-5">The guaranteed formula to be a Math wizard</p>
      
      <div className="row">
        <div className="col-md-4 mb-4" >
          <div className="card h-100"style={{ backgroundColor: '#F0B1F2' }}>
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
        
        <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#F1F2B1' }}>
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
    
        <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ backgroundColor: '#A0A08A' }}>
            <div className="card-body">
              <h5 className="card-title text-success">A Math Learning App Kids Crave</h5>
              <ul className="card-text">
                <li>Developed by early education specialists from Ivy League and other top universities</li>
                <li>Progressive learning pathways thoughtfully developed for each child</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container bg-peach text-center p-5">
      <h1 className="text-black">Cultivate Thinking Skills From All Aspects</h1>
      <p className="text-grey">Our Expert Advisors Can Help You Find The Right Workspace Solution For You And Your Team</p>
      <div className="btn-group my-3">
        <button className="btn btn-orange">$2 <small>3-4 Years Old</small></button>
        <button className="btn btn-orange">$3 <small>5 Years Old</small></button>
        <button className="btn btn-orange">$4 <small>6 Years Old</small></button>
      </div>
      <div className="row justify-content-center align-items-center my-5">
        
      </div>
      <div className="row">
        <div className="col-md-3">
          <h3>Number Sense & Operations</h3>
          <p>Fluently compose and decompose numbers within 10. Understand addition and subtraction within 10.</p>
        </div>
        <div className="col-md-3">
          <h3>Geometry</h3>
          <p>Recognize 2D and 3D shapes Identify defining attributes of shapes (edges, vertices, sides, reflection, etc.)</p>
        </div>
        <div className="col-md-3">
          <h3>Logic and Patterns</h3>
          <p>Use analogical reasoning to solve Sudoku puzzles and understand the concept of cycles.</p>
        </div>
        <div className="col-md-3">
          <h3>Problem Solving</h3>
          <p>Learn tangram puzzles and practice creating shapes using tangram pieces.</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;
