import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import ttuLogo from './ttu-logo.png'
import elogo from './e-logo.webp'

const Projects = () => {
  const navigate = useNavigate();

  const handleSeeMore = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };

  return (
    <div className="section" id="projects">
      <hr className="line" />
      <h1 className="header">PROJECTS</h1>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <h2>The Financial Factor: Does School Funding Drive Academic Success?</h2>
          <p className="project-description">
             This project analyzes the impact of school funding on student outcomes, highlighting disparities in Texas education and exploring connections to long-term success like college attendance and job opportunities.          </p>
          <button onClick={() => handleSeeMore(1)} className="see-more-button">
            See More Details
          </button>
          <img src={ttuLogo} alt="School Funding Logo" className="project-logo" />
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h2>Data-Driven Insights from an Exercise Contest</h2>
          <p className="project-description">
          This project scraped data from an exercise contest leaderboard to gather user metrics like sleep, water intake, and steps, using Python and BeautifulSoup to clean and structure the data for trend analysis.
          </p>
          <button onClick={() => handleSeeMore(2)} className="see-more-button">
            See More Details
          </button>
          <img src={ttuLogo} alt="Exercise Contest Logo" className="project-logo" />
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h2>Energy Production and Vendor Analysis</h2>
          <p className="project-description">
            This project focuses on analyzing energy production data from various fields and vendors...
          </p>
          <button onClick={() => handleSeeMore(3)} className="see-more-button">
            See More Details
          </button>
          <img src={ttuLogo} alt="Energy Production Logo" className="project-logo" />
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <h2>Comparative Analysis of Smartphone Specifications</h2>
          <p className="project-description">
          This project involved scraping and analyzing smartphone specifications from various web sources, organizing key features like camera quality, battery life, and storage into a structured format for easy comparison.
          </p>
          <button onClick={() => handleSeeMore(4)} className="see-more-button">
            See More Details
          </button>
          <img src={ttuLogo} alt="Smartphone Logo" className="project-logo" />
        </div>

           {/* Project 5 */}
           <div className="project-card">
          <h2>Automated SMS Messenger</h2>
          <p className="project-description">
            Developed an automated SMS notification system using Python, cron, and Textbelt API to send daily reminders for due assignments, streamlining communication and ensuring timely alerts without manual intervention.         
          </p>
          <button onClick={() => handleSeeMore(5)} className="see-more-button">
            See More Details
          </button>
          <img src={elogo} alt="Smartphone Logo" className="project-logo" />
        </div>

        {/* Project 6 */}
        <div className="project-card">
          <h2>CRUD Operations on a Database with React</h2>
          <p className="project-description">
              A responsive and interactive user table built with React and Material-UI, featuring dynamic data display, customizable pagination, and CRUD functionality to efficiently manage user information.         
          </p>
          <button onClick={() => handleSeeMore(6)} className="see-more-button">
            See More Details
          </button>
          <img src={elogo} alt="Smartphone Logo" className="project-logo" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
