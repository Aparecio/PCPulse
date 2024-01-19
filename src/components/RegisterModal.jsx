import React, { useState } from 'react';
import './stylesheets/LogInModal.css';

const RegisterModal = ({ toggleLoginModal, toggleRegisterModal }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // Validate and handle registration logic here
    console.log('Registered Successfully');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);

    // Clear form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');

    // Close the modal
    toggleRegisterModal();
  };

  return (
    <div className='background-overlay'>
      <div className="custom-modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-content">
          <span className="close" onClick={toggleRegisterModal}>&times;</span>
          <h2 className="text-danger text-center">Register</h2>
          <p className="mb-3 text-center">Enter your credentials</p>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="d-flex justify-content-center flex-column">
              <button type="submit" className="btn btn-danger mr-2 mx-auto col-10 my-1">Register</button>
              <p> Already have an account? <a onClick={toggleLoginModal} > Log in here.</a> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
