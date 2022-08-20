import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { serviceID } = useParams();
  const navigateCheckout = () => {
    navigate('/checkout')
  }
  return (
    <div className='container mx-auto'>
      <h2>Hello ! ,, Welcome To Details {serviceID} </h2>
      <button className='primary' onClick={() => navigateCheckout()}>Check Out</button>
    </div>
  );
};

export default ServiceDetails;