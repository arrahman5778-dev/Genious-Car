import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const {serviceID} = useParams()
  return (
    <div className='container mx-auto'>
      <h2>Hello ! ,, Welcome To Details {serviceID} </h2>
      <button className='primary'>Check Out</button>
    </div>
  );
};

export default ServiceDetails;