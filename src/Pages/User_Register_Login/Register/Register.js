import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Sociallogin from '../Sociallogin/Sociallogin';
import auth from '../../../firebase.init';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
  // Creatre User 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // Update Profile
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [termsAgree, SetTermsAgree] = useState(false)
  //  Email & PassWord Ref 
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();

  // Handle Submit
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await createUserWithEmailAndPassword(email, password)
    await updateProfile({ displayName: name });
    navigate('/home')
    console.log('Updated profile')
  }

  // Navigate Login
  const navigateLogin = e => {
    navigate('/login')
  }

  if(loading || updating){
    return <Loading></Loading>
  }
  
  return (
    <div className=' container mx-auto my-5 w-50'>
      <h1 className=''>Plese SignUp Here</h1>
      <Form onSubmit={handleRegister} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter Your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password" required />
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