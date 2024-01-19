import React, { useState } from 'react';
import './stylesheets/LogInModal.css';

const LoginModal = ({ toggleLoginModal, toggleRegisterModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Your login logic here

    console.log('Logging in as:', username, password);

    setUsername('');
    setPassword('');
    toggleLoginModal();
  };

  return (
    <div className='background-overlay'>
      <div className="custom-modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-content">
          <span className="close" onClick={toggleLoginModal}> &times; </span>
          <h2 className="text-danger text-center">Login</h2>
          <p className="mb-3 text-center"> Enter your credentials</p>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div className="d-flex justify-content-center flex-column">
                <button type="submit" className="btn btn-danger mr-2 mx-auto col-10 my-1"> Login </button>
                <button className="btn btn-danger mx-auto col-10 my-2" onClick={toggleRegisterModal}> Register </button>
                <a href="#" className="btn"> Forgot Password? </a>
                <a href="/HomePage" className="btn"> Continue as a Guest </a>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
