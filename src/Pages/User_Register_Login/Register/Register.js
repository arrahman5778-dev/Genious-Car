import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Sociallogin from '../Sociallogin/Sociallogin';
import auth from '../../../firebase.init';
import { useState } from 'react';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [termsAgree, SetTermsAgree] = useState(false)
  //  Email & PassWord Ref 
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // Handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (termsAgree) {
      createUserWithEmailAndPassword(email, password)
    }
  }

  // Navigate Login
  const navigateLogin = e => {
    navigate('/login')
  }
  return (
    <div className=' container mx-auto my-5 w-50'>
      <h1 className=''>Plese SignUp Here</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter Your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={() => SetTermsAgree(!termsAgree)}
            className={termsAgree ? 'text-primary' : 'text-danger'}
            type="checkbox"
            name='terms'
            id='terms'
            label="Terms & condition" />
        </Form.Group>
        <Button
          disabled={!termsAgree}
          variant="primary"
          type="submit">
          Register
        </Button>
      </Form>
      <p className='mt-2'>
        Alredy have an Account?
        <Link to="/signup"
          className='text-decoration-none text-primary pe-auto '
          onClick={navigateLogin}>Please login
        </Link>
      </p>
      <Sociallogin />
    </div>
  );
};

export default Register;