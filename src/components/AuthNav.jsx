import React from 'react';
import './stylesheets/TopNavBar.css';

const AuthNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{ zIndex: 2000 }}>
      <div className="container-fluid">
        <a className="navbar-brand nav-link" target="_blank"> <strong> SHOP NAME </strong> </a>
        <button type="button" className="btn btn-outline-primary text-white"> Log Out </button>
      </div>
    </nav>
  );
};

export default AuthNav;
