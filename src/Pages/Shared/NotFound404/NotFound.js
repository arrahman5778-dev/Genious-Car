import React from 'react';
import sleeping from '../../../images/slepping.jpg'

const NotFound = () => {
  return (
    <div className=' mx-auto'>
      <h1 >Page Not Found 404</h1>
      <img src={sleeping} alt="" height={500} />
    </div>
  );
};

export default NotFound;