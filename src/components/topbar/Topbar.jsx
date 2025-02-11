import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Resume from "./Valdez.Resume.pdf";
import elogo from "/e-logo.webp";
import "./Topbar.css";

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroInView(entry.isIntersecting),
      { threshold: 0 }  // Trigger as soon as scrolling starts
    );
  
    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);
  

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  const scrollAfterRouting = (sectionId) => {
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMenuOpen(false);
  };

  return (
    <div
      className={`topbar-container ${isHeroInView ? "transparent" : "black"}`}
    >
      <nav className="topbar" ref={menuRef}>
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

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className={`topbar-links ${menuOpen ? "open" : ""}`}>
          {["skills", "about", "experience", "projects", "certificate", "orgs"].map((section) => (
            <li key={section}>
              {location.pathname === "/" ? (
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ) : (
                <RouterLink to="/" onClick={() => scrollAfterRouting(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </RouterLink>
              )}
            </li>
          ))}
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
