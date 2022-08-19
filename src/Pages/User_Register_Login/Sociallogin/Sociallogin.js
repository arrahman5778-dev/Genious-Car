import React from 'react';

const Sociallogin = () => {
  return (
    <div>
      <div className=' d-flex align-items-center'>
        <div style={{ height: '1px' }} className=' bg-primary w-50 '></div>
        <p className=' mt-2 px-2'>or</p>
        <div style={{ height: '1px' }} className=' bg-primary w-50'></div>
      </div>
     
        <button className='bg-transparent border-1 p-2 rounded w-100 mb-2'>Countinue With Google</button>
        <button className='bg-primary border-0 p-2 rounded w-100 mb-2'>Countinue With Facebook</button>
        <button className='bg-dark text-white border-0 p-2 rounded w-100 mb-2'>Countinue With Apple</button>
  
    </div>
  );
};

export default Sociallogin;