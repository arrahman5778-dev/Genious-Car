import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/Social icon/google-160-189824.png'
import Loading from '../../Shared/Loading/Loading';

const Sociallogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
  let errorElment;
  const navigate = useNavigate();
  if (error || errorGit) {
    errorElment = <div>
      <p className='text-danger mx-auto'>Error: {error?.message}  {errorGit?.message}</p>
    </div>
  }
  if (user || userGit) {
    navigate('/home')
  }
  if (loading || loadingGit) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className=' d-flex align-items-center'>
        <div style={{ height: '1px' }} className=' bg-primary w-50 '></div>
        <p className=' mt-2 px-2'>or</p>
        <div style={{ height: '1px' }} className=' bg-primary w-50'></div>
      </div>
      {errorElment}
      <button
        onClick={() => signInWithGoogle()}
        className='bg-primary border-1 p-2 rounded w-100 mb-2 px-2' >
        <img src={googleIcon} alt="" />
        Countinue With Google
      </button>
      <button className='bg-primary border-0 p-2 rounded w-100 mb-2'>
        Countinue With Facebook</button>
      <button
        onClick={() => signInWithGithub()}
        className='bg-dark text-white border-0 p-2 rounded w-100 mb-2'>
        Countinue With GitHub
      </button>

    </div>
  );
};

export default Sociallogin;