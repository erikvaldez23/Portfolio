import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Resume from "./Valdez.Resume.pdf";
import elogo from "/e-logo.webp";
import "./Topbar.css";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
  const [isHeroInView, setIsHeroInView] = useState(true); // State for hero visibility
  const menuRef = useRef(null); // Ref for the menu container
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Detect if hero section is in view
  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting); // Update state based on visibility
      },
      { threshold: 0.1 } // Trigger when 10% of the hero is visible
    );

    observer.observe(heroSection);

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  const scrollAfterRouting = (sectionId) => {
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMenuOpen(false); // Close menu after routing
  };

  return (
    <div
      className={`topbar-container ${isHeroInView ? "transparent" : "black"}`} // Apply dynamic class
    >
      <nav className="topbar" ref={menuRef}>
        {/* Logo */}
        <div className="logo">
          {location.pathname === "/" ? (
            <ScrollLink to="hero" smooth={true} duration={500}>
              <img src={elogo} alt="Erik Valdez Logo" />
            </ScrollLink>
          ) : (
            <RouterLink to="/">
              <img src={elogo} alt="Erik Valdez Logo" />
            </RouterLink>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Links */}
        <ul className={`topbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={() => scrollAfterRouting("skills")}>
                Skills
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                About
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={() => scrollAfterRouting("about")}>
                About
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                onClick={() => scrollAfterRouting("experience")}
              >
                Experience
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={() => scrollAfterRouting("projects")}>
                Projects
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="certificate"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Certifications
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                onClick={() => scrollAfterRouting("certificate")}
              >
                Certifications
              </RouterLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="orgs"
                smooth={true}
                duration={500}
                onClick={() => setMenuOpen(false)}
              >
                Organizations
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={() => scrollAfterRouting("orgs")}>
                Organizations
              </RouterLink>
            )}
          </li>
          <li>
            <a
              href={Resume}
              download="Valdez-Resume.pdf"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
