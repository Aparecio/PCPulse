import React from 'react';
import './stylesheets/TopNavBar.css';

const UnAuthNav = ({ toggleLoginModal, toggleRegisterModal }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: 2000 }}>
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src=".\images\Logo.png" alt="Logo" className="mr-2 image-logo"/>
          <a className="navbar-brand text-danger nav-link" target="_blank"> <strong> ArtzWork PC </strong> </a>
          {/* <a className="nav-link mx-2" href="#">About Us</a>
          <a className="nav-link mx-2" href="#">Contact Us</a> */}
        </div>

        <input type="search" placeholder="Search here..." className="form-control search-bar mb-2" style={{ width: 500 }}/>

        <div className="d-flex">
          <button type="button" className="btn btn-outline-primary text-danger border-0 mr-0 btn-block" onClick={toggleLoginModal}> Login </button>
          <button type="button" className="btn btn-outline-primary text-danger border-danger btn-block" onClick={toggleRegisterModal} > Register </button>
        </div>
      </div>
    </nav>
  );
};

export default UnAuthNav;
