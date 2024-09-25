import React from "react";
import { Link as ScrollLink } from 'react-scroll';  // Import react-scroll Link for smooth scrolling
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import react-router-dom Link
import "./Topbar.css";

const Topbar = () => {
  const location = useLocation(); // Detect the current route

  // Helper function to scroll to a section after routing back to the main page
  const scrollAfterRouting = (sectionId) => {
    // Add a short delay to ensure the page has loaded before scrolling
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="topbar">
      <ul>
        {/* Conditionally use react-scroll on the main page, and router links on subpages */}
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
        <li><a href="/Valdez.Resume.pdf" download="Valdez_Resume.pdf">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Topbar;
