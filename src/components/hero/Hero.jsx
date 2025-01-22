import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="left-content">
          <div className="quote">
  <p className="hero-name">Erik Valdez</p>
  <h1>
    Quality <span className="highlight">Design & Web</span> <br />
    <span className="highlight">Development</span> Integration
  </h1>
  {/* Social Media Links */}
  <div className="social-icons-container">
    <div className="social-icons">
      <a
        href="https://linkedin.com/in/erik-valdez-838691291"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/erikvaldez23"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a href="mailto:erikkvaldez@gmail.com">
        <FaEnvelope size={30} />
      </a>
      <a
        href="https://instagram.com/erikvaldez_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} />
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
