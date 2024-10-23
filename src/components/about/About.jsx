import React from "react";
import "./About.css";
import logo from "./rawls-college-of-business.png"; // Adjust the path to your logo file

const About = () => {
  return (
    <div className="about-container" id="about">
      <hr className="line" />
      <h1 className="header">ABOUT ME</h1>
      
      <div className="about-content">
        {/* Text container on the left */}
        <div className="about-text">
          <p>
          I am a passionate software developer currently pursuing a Bachelor's in Information Technology with a focus on systems at Texas Tech University, set to graduate in May 2025. Based in Dallas, Texas, I bring a proactive, solutions-driven mindset to my work, excelling in both front-end and back-end development. 
          My experience spans operating systems like Unix and Linux, enabling me to handle projects from conception to deployment. I thrive in fast-paced environments where I can leverage my skills to build efficient, scalable solutions that drive real impact. I'm eager to apply my technical expertise to innovative projects and make an immediate contribution in the tech industry.
          </p>
        </div>
      </div>

      {/* Logo at the bottom */}
      {/* <div className="logo-container">
        <img src={logo} alt="Rawls College of Business Logo" className="logo" />
      </div> */}
    </div>
  );
};

export default About;
