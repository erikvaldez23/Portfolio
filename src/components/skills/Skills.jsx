import React from "react";
import "./Skills.css";

const Skills = () => {
    return(
        <div className="section" id="skills">
        <hr className="line" />
      
        <h1>SKILLS</h1>
        <div className="skills-grid">
          <div className="skill-item">
            <i className="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-database"></i>
            <span>SQL</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-react"></i>
            <span>React</span>
          </div>
          <div className="skill-item">
            <i className="fab fa-node-js"></i>
            <span>Node.js</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-terminal"></i>
            <span>UNIX/Linux</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-code"></i>
            <span>Bash Scripting</span>
          </div>
          <div className="skill-item">
            <i className="fas fa-code"></i>
            <span>Full Stack Dev</span>
          </div>
        </div>
      </div>
    )
}

export default Skills;