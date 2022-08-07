import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  //  Email & PassWord Ref 
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // Handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  }

  // Navigate Login
  const navigateLogin = e => {
    navigate('/login')
  }
  return (
    <div className=' container mx-auto my-5'>
      <h1 className=''>Plese SignUp Here</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='mt-2'> Alredy have an Account? <Link to="/signup" className=' text-primary    pe-auto ' onClick={navigateLogin}>Please login</Link> </p>
    </div>
  );
};

export default Register;