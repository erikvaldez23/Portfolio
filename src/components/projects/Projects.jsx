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
      title: "The Impact of School Funding on Academic Performance",
      description:
        "Analyzed the impact of school funding disparities on student outcomes...",
      background: ttuLogo, // Path to the background image
    },
    {
      id: 2,
      title: "Data-Driven Insights from an Exercise Contest",
      description:
        "Scraped data from an exercise leaderboard to analyze user metrics...",
      background: ttuLogo,
    },
    {
      id: 3,
      title: "Energy Production and Vendor Analysis",
      description:
        "Focused on analyzing energy production data from various fields...",
      background: elogo,
    },
    {
      id: 4,
      title: "Comparative Analysis of Smartphone Specifications",
      description:
        "Scraped and analyzed smartphone specifications from web sources...",
      background: elogo,
    },
    {
      id: 5,
      title: "Personal Calendar SMS Reminder Service",
      description:
        "Developed an automated SMS notification system using Python...",
      background: ttuLogo,
    },
    {
      id: 6,
      title: "Interactive Web App for CRUD Operations",
      description:
        "Built a responsive and interactive user table with React and Material-UI...",
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
            style={{ backgroundImage: `url(${project.background})` }}
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
