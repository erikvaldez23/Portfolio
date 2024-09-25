import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';
import logo from "../about/rawls-college-of-business.png"; // Adjust the path to your logo file


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
      {/* <div className="logo-container">
            <img src={logo} alt="My Logo" className="logo" />
          </div> */}
        <div className="social-icons">
          <a href="https://linkedin.com/in/erik-valdez-838691291" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/erikvaldez23" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:erikkvaldez@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/erikvaldez_" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <p className="footer-text">© 2024 Erik Valdez. All rights reserved.</p>
      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
