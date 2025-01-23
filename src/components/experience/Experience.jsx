import React from "react";
import "./Experience.css";
import adonaiLogo from './ai-logo.png';
import tiLogo from './ti-logo.jpeg';
import fitnessLogo from './24-logo.jpeg';

const Experience = () => {
    return (
        <div className="experience-ection" id="experience">
            <hr className="line" />
            <h1 className="header">EXPERIENCE</h1>
            <div className="experience-container">
                <div className="experience-card">
                    <h2>Web / Backend Developer</h2>
                    <h3>Adonai Innovations</h3>
                    <p className="date">August 2024 - Present</p>
                    <p>Developed backend solutions with Node.js, Express, and worked with MongoDB for dynamic data management.</p>
                    {/* <a href="https://www.adonai-innovations.com" target="_blank" rel="noopener noreferrer"> */}
                        <img src={adonaiLogo} alt="Adonai Innovations Logo" className="company-logo" />
                    {/* </a> */}
                </div>
                <div className="experience-card">
                    <h2>Software Engineer Intern</h2>
                    <h3>Texas Instruments</h3>
                    <p className="date">May 2024 - August 2024</p>
                    <p>Worked on automation projects using UNIX/Linux and full-stack web development with JavaScript, Node.js, and React.</p>
                    <a href="https://www.ti.com" target="_blank" rel="noopener noreferrer">
                        <img src={tiLogo} alt="Texas Instruments Logo" className="company-logo" />
                    </a>
                </div>
                <div className="experience-card">
                    <h2>Personal Trainer</h2>
                    <h3>24 Hour Fitness</h3>
                    <p className="date">August 2022 - August 2023</p>
                    <p>Designed and led customized workout programs, coached clients on proper techniques, and provided guidance to help them achieve their fitness and health goals.</p>
                    <a href="https://www.24hourfitness.com" target="_blank" rel="noopener noreferrer">
                        <img src={fitnessLogo} alt="24 Hour Fitness Logo" className="company-logo" />
                    </a>
                </div>
                <div className="experience-card">
                    <h2>Sales Representative</h2>
                    <h3>24 Hour Fitness</h3>
                    <p className="date">August 2021 - August 2022</p>
                    <p>Engaged potential members, provided information about fitness programs, and promoted membership options to drive sales and enhance customer satisfaction.</p>
                    <a href="https://www.24hourfitness.com" target="_blank" rel="noopener noreferrer">
                        <img src={fitnessLogo} alt="24 Hour Fitness Logo" className="company-logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experience;
