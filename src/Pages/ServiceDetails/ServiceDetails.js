import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const {serviceID} = useParams()
  return (
    <div>
      <h2>Hello ! ,, Welcome To Details {serviceID} </h2>
    </div>
  );
};

export default ServiceDetails;