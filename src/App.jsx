import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import { createTheme } from "@mui/system";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Courses from "./components/courses/Courses";
import Topbar from "./components/topbar/Topbar";
import Details from "./components/projects/Details";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Orgs from "./components/orgs/Orgs";
import Cert from "./components/certs/Cert";
import Contact from "./components/contact/Contact";
import StarryBackground from "./components/StarryBackground";


const theme = createTheme({
  palette: {
    primary: { main: "#df4747" },
  },
});


const App = () => {
  return (
    <Router>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -999,
        }}
      >
        <StarryBackground />
      </Box>
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
                <Cert />
                <Orgs />
                {/* <Courses /> */}
                <Contact />
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
