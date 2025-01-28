import React from "react";
import "./About.css";


const About = () => {
  return (
    <div className="about-section">
    <div className="about-container" id="about">
      <hr className="line" />
      <h1 className="header">ABOUT ME</h1>
      
      <div className="about-content">
        <div className="about-text">
          <p>
          Hi there, I’m Erik Valdez, a driven and passionate software developer from Dallas, Texas, currently pursuing a Bachelor's degree in Information Technology with a concentration in Systems at Texas Tech University. With an expected graduation date of May 2025, I have honed my skills in full-stack web development, automation, and data analysis through both academic projects and hands-on professional experiences. I’m proud to have contributed to innovative projects during my internship at Texas Instruments and through roles at companies like Adonai Innovations. My journey has been fueled by a strong curiosity for technology and a commitment to problem-solving in meaningful ways.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
