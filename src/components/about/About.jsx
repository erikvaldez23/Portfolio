import React from "react";
import "./About.css";


const About = () => {
  return (
    <div className="about-container" id="about">
      <hr className="line" />
      <h1 className="header">ABOUT ME</h1>
      
      <div className="about-content">
        <div className="about-text">
          <p>
          I am a passionate software developer currently pursuing a Bachelor's in Information Technology with a focus on systems at Texas Tech University, set to graduate in May 2025. Based in Dallas, Texas, I bring a proactive, solutions-driven mindset to my work, excelling in both front-end and back-end development. 
          My experience spans operating systems like Unix and Linux, enabling me to handle projects from conception to deployment. I thrive in fast-paced environments where I can leverage my skills to build efficient, scalable solutions that drive real impact. I'm eager to apply my technical expertise to innovative projects and make an immediate contribution in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
