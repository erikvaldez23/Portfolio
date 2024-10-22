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
          I am a driven and passionate software developer pursuing a Bachelor's degree in Information Technology with a concentration in systems at Texas Tech University, with an expected graduation in May 2025. Hailing from Dallas, Texas, my journey in tech has been fueled by a relentless desire to solve complex problems and create meaningful digital experiences. My proficiency spans both front-end and back-end development, as well as operating systems like Unix and Linux, enabling me to contribute to projects from ideation to deployment. I thrive in dynamic environments where I can apply my technical expertise to develop efficient, scalable solutions. I'm excited to leverage my skills and hands-on experience to make an immediate impact in the tech industry.          </p>  
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
