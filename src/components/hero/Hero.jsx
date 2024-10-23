import React from "react";
import "./Hero.css";
import Photos from "../photos/Photos.jsx";
import Headshot from './Headshot.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="left-content">
                    <img src={Headshot} alt="Profile" className="profile-image" />

                    <div className="quote">
                        <h1>Hello, my name is Erik Valdez!</h1>
                        <ul className="subline"> - Software Engineer</ul>
                        <ul className="subline"> - Full-Stack Developer</ul>
                        <ul className="subline"> - Data Analyst</ul>
                        
                        {/* Social Media Links */}
                        <div className="social-icons-container">
                            <div className="social-icons">
                                <a href="https://linkedin.com/in/erik-valdez-838691291" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={30} />
                                </a>
                                <a href="https://github.com/erikvaldez23" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={30} />
                                </a>
                                <a href="mailto:erikkvaldez@gmail.com">
                                     <FaEnvelope />
                                 </a>  
                                <a href="https://instagram.com/erikvaldez_" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-content">
                    <Photos />
                </div>
            </div>
        </div>
    );
};

export default Hero;
