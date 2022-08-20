import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Sociallogin from '../Sociallogin/Sociallogin';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
    auth
  );
  //  Email & password Ref
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();

  // handle Submit
  const handleSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  }
  // Navigate Register
  const navigateRegister = e => {
    navigate('/signup')
  }
  const resetPassword =async()=>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
  return (
    <div className='container mx-auto w-50 my-5 '>
      <h2 >Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className='mt-2'> New To Genious Car? <Link to="/signup" className=' text-primary  text-decoration-none ' onClick={navigateRegister}>Please Register</Link> </p>
      <p className='mt-2 '> Forgate Password? <Link to="" className=' text-primary     text-decoration-none ' onClick={resetPassword}>Reset Password</Link> </p>
      <Sociallogin></Sociallogin>
    </div>
  );
};

export default Login;