import React, { useState } from 'react';
import './Form.css';
import Signup from './Signup';

const Form = () => {
  const [Submit, setSubmit] = useState(false);

  function submitForm() {
    setSubmit(true);
  }
  return (
    <>
      <Signup />
        
    </>
  );
};
export default Form