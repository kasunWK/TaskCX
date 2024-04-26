import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation'

const Login = () => {
    const [values, setValues]= useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState([])
    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        // axios.post('http://localhost:8081/login', { email, password })
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    };

    
    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='p-3 bg-white w-25 rounded'>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input
                            className='form-control'
                            type='email'
                            name='email'
                            placeholder='Enter email'
                            value={values.email}
                            onChange={handleInput}
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            className='form-control'
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={values.password}
                            onChange={handleInput}
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>


                    <Link to="/Home" className='btn btn-success'>Login </Link>

                    <p>
                        Don't have an account?
                        <Link to="/signup" className='btn btn-default border'>Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
