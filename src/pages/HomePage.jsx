import React, { useState } from 'react'
import { slides } from '../data/carouselData.json'

import { Footer } from '../components/Footer';
import UnAuthNav from '../components/UnAuthNav';
import LoginModal from '../components/LogInModal'
import RegisterModal from '../components/RegisterModal';
import { ProductCarousel } from '../components/Homepage/ProductCarousel';
import { ProductSection } from '../components/Homepage/ProductSection';

export const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    if (showRegisterModal) {
      setShowRegisterModal(false);
    }
  };

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
    if (showLoginModal) {
      setShowLoginModal(false);
    }
  };

  return (
    <div className="content">
      <UnAuthNav toggleLoginModal={toggleLoginModal} toggleRegisterModal={toggleRegisterModal} />
        <div className="main-container">
          {showLoginModal && <LoginModal toggleLoginModal={toggleLoginModal} toggleRegisterModal={toggleRegisterModal} />}
          {showRegisterModal && <RegisterModal toggleLoginModal={toggleLoginModal} toggleRegisterModal={toggleRegisterModal} />}
          <ProductCarousel data={slides} />
          <ProductSection />
        </div>
        <Footer />
    </div>
  )
}