import React from "react";
import "./Hero.css";
import Photos from "../photos/Photos.jsx";
import Headshot from './Headshot.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="left-content">
                    <img src={Headshot} alt="Profile" className="profile-image" />

                    <div className="quote">
                        <h1>Hello, my name is Erik Valdez!</h1>
                        <ul className="subline">- Software Engineer</ul>
                        <ul className="subline">- Full-Stack Developer</ul>
                        <ul className="subline">- Data Analyst</ul>
                        {/* <button className="cta-btn">
                            <Link to="about" smooth={true} duration={500}>Learn More</Link>
                        </button> */}
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
