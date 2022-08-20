import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Sociallogin from '../Sociallogin/Sociallogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
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
  const notify = () => toast("Login Sucsessfully");
  // Navigate Register
  const navigateRegister = e => {
    navigate('/signup')
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast('Sent email');
  }
  if (user) {
    navigate(from, { replace: true });
  }
  // Loading .....
  if (loading || sending) {
    return <Loading></Loading>
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
        <Button onClick={notify} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className='mt-2'> New To Genious Car? <Link to="/signup" className=' text-primary  text-decoration-none ' onClick={navigateRegister}>Please Register</Link> </p>
      <p className='mt-2 '> Forgate Password? <button to="" className=' text-primary btn btn-Link     text-decoration-none ' onClick={resetPassword}>Reset Password</button> </p>
      <Sociallogin></Sociallogin>
      <ToastContainer />
    </div>
  );
};

export default Login;