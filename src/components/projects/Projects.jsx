import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import ttuLogo from './ttu-logo.png';
import elogo from './e-logo.webp';

const Projects = () => {
  const navigate = useNavigate();

  const handleSeeMore = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };

// Project data with dynamic backgrounds
const projects = [
  {
    id: 1,
    title: "TintTek Website",
    description:
      "Developed a responsive website for TintTek, enhancing user experience and showcasing their services effectively.",
    background: ttuLogo, 
  },
  // {
  //   id: 2,
  //   title: "Insights from an Exercise Contest",
  //   description:
  //     "Analyzed user performance data from a fitness contest leaderboard, providing insights into health habits like sleep, hydration, and activity trends.",
  //   background: ttuLogo,
  // },
  {
    id: 3,
    title: "Adonai Innovations Website",
    description:
      "Designed and developed a modern website for Adonai Innovations, showcasing its services and enhancing its online presence.",
    background: elogo,
  },
  {
    id: 4,
    title: "Calendar Mobile App",
    description:
      "Created a mobile app for managing personal calendars, enabling users to efficiently track and organize their schedules.",
    background: elogo,
  },
  {
    id: 5,
    title: "Personal Calendar SMS Reminder Service",
    description:
      "Designed an automated system to send timely SMS reminders for upcoming assignments, enhancing productivity through efficient task management.",
    background: ttuLogo,
  },
  {
    id: 6,
    title: "Interactive Web App for CRUD Operations",
    description:
      "Developed a dynamic user management interface with React and Material-UI, featuring seamless database integration for CRUD functionality.",
    background: elogo,
  },
];


  return (
<div className="section" id="projects">
  <hr className="line" />
  <h1 className="header">PROJECTS</h1>

  <div className="projects-container">
    {projects.map((project) => (
      <div
        key={project.id}
        className="project-card"
      >
        <div className="project-card-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <button
            onClick={() => handleSeeMore(project.id)}
            className="see-more-button"
          >
            See More Details
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Projects;
