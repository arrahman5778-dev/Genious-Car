import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  //  Email & password Ref
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  // handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

  }
  // Navigate Register
  const navigateRegister = e => {
    navigate('/signup')
  }
  return (
    <div className='container mx-auto w-50 my-5 '>
      <h2 >Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className='mt-2'> New To Genious Car? <Link to="/signup" className=' text-primary    pe-auto ' onClick={navigateRegister}>Please Register</Link> </p>
    </div>
  );
};

export default Login;