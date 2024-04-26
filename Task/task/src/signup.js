import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
  };

  useEffect(() => {
    const isFormValid = Object.values(errors).every((error) => error === '');
    if (isFormValid) {
      axios.post('http://localhost:8081/signup', values)
        .then((res) => {
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  }, [errors, values, navigate]);

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
      <div className='p-3 bg-white w-25 rounded'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input className='form-control' type='text' placeholder='Enter name' name='name' onChange={handleInput} />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input className='form-control' type='email' placeholder='Enter email' name='email' onChange={handleInput} />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input className='form-control' type='password' placeholder='Password' name='password' onChange={handleInput} />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-success'>Signup</button>

          <p>
            Already have an account? <Link to='/' className='btn btn-default border'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
