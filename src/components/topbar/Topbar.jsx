import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import "./Topbar.css";
import Resume from './Valdez.Resume.pdf'

const Topbar = () => {
  const location = useLocation();

  const scrollAfterRouting = (sectionId) => {
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="topbar">
      <ul>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => scrollAfterRouting('skills')}>Skills</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => scrollAfterRouting('about')}>About</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="experience" smooth={true} duration={500}>Experience</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => scrollAfterRouting('experience')}>Experience</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="certificate" smooth={true} duration={500}>Certifications</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => scrollAfterRouting('certificate')}>Certificate</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="orgs" smooth={true} duration={500}>Organizations</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => scrollAfterRouting('orgs')}>Organizations</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => scrollAfterRouting('projects')}>Projects</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="courses" smooth={true} duration={500}>Relevant Coursework</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => scrollAfterRouting('courses')}>Relevant Coursework</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <ScrollLink to="footer" smooth={true} duration={500}>Contact</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => scrollAfterRouting('footer')}>Contact</RouterLink>
          )}
        </li>
        <li><a href={Resume} download="Valdez-Resume.pdf">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Topbar;
