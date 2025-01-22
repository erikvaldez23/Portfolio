import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <hr className="line" />
      <h1 className="skills-header">SKILLS</h1>
      <div className="skills-grid">
        <div className="skill-item">
          <i className="fab fa-python"></i>
          <div className="skill-content">
            <span>Python</span>
            <p>Used for data analysis, scripting, and web development.</p>
          </div>
        </div>
        <div className="skill-item">
          <i className="fas fa-database"></i>
          <div className="skill-content">
            <span>SQL</span>
            <p>Used for managing and querying relational databases.</p>
          </div>
        </div>
        <div className="skill-item">
          <i className="fab fa-js"></i>
          <div className="skill-content">
            <span>JavaScript</span>
            <p>Used for building dynamic, interactive web applications.</p>
          </div>
        </div>
        <div className="skill-item">
          <i className="fab fa-react"></i>
          <div className="skill-content">
            <span>React</span>
            <p>Used for building modern, reusable UI components.</p>
          </div>
        </div>
        <div className="skill-item">
          <i className="fab fa-node-js"></i>
          <div className="skill-content">
            <span>Node.js</span>
            <p>Used for creating scalable backend services and APIs.</p>
          </div>
        </div>
        <div className="skill-item">
          <i className="fas fa-terminal"></i>
          <div className="skill-content">
            <span>UNIX/Linux</span>
            <p>Used for system administration and scripting tasks.</p>
          </div>
        </div>
        <div className="skill-item">
          <i className="fas fa-code"></i>
          <div className="skill-content">
            <span>Bash Scripting</span>
            <p>Used for automating repetitive tasks in UNIX systems.</p>
          </div>
        </div>
        <div className="skill-item">
          <i className="fas fa-code"></i>
          <div className="skill-content">
            <span>Cron</span>
            <p>Used for scheduling automated tasks in Linux environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
