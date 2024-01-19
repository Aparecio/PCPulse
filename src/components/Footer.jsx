import React from 'react'
import './stylesheets/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-danger"> Contact Us </h4>
            <p> Facebook Page: <a href="https://www.facebook.com/ArtzworkPc" target="_blank" rel="noopener noreferrer" > Artzwork PC  </a></p>
            <p>Email: artswork00@gmail.com</p>
            <p>Phone: 09175507848 / 09279489888</p>
          </div>
          
          <div className="col-md-6">
            <h4 className="text-danger"> Address </h4>
            <p>Phase 4 Package 4, Powerline, Caloocan, 1428</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
