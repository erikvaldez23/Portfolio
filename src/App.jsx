import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Courses from './components/courses/Courses';
import Topbar from './components/topbar/Topbar';
import Details from './components/projects/Details';
import ScrollToTop from './components/scroll/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Topbar />
                <Hero />
                <Skills />
                <About />
                <Experience />
                <Projects />
                <Courses />
                <Footer />
              </>
            } 
          />
          <Route path="/projects" element={<Projects />} />
        <Route path="/project-details/:projectId" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
