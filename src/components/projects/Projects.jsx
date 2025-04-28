import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Import your images
import ttuLogo from "./ttu-logo.png";
import elogo from "./e-logo.webp";
import adonai from "/adonai-logo-1.png";
import m2m from "/logo-1.png";
import tint from "/tinttek-logo1.png";

const Projects = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSeeMore = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: "TintTek Website & Chatbot",
      description:
        "Developed a responsive website for TintTek, enhancing user experience and showcasing their services effectively.",
      background: tint,
    },
    {
      id: 3,
      title: "Adonai Innovations Website",
      description:
        "Designed and developed a modern website for Adonai Innovations, showcasing its services and enhancing its online presence.",
      background: adonai,
    },
    {
      id: 7,
      title: "Made 2 Move Website",
      description:
        "Designed and developed a modern website for Adonai Innovations, showcasing its services and enhancing its online presence.",
      background: m2m,
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
      background: elogo,
    },
    {
      id: 6,
      title: "Interactive Web App for CRUD Operations",
      description:
        "Developed a dynamic user management interface with React and Material-UI, featuring seamless database integration for CRUD functionality.",
      background: elogo,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 6, md: 10 },
        background: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.5px",
              mb: 2,
            }}
          >
            Recent Work
          </Typography>

          <Box
            sx={{
              width: "40px",
              height: "4px",
              backgroundColor: "#df4747",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          />
        </Box>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <motion.div
                  variants={cardVariants}
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card
                    sx={{
                      height: { xs: 280, md: 340 },
                      display: "flex",
                      flexDirection: "column",
                      background: "transparent",
                      position: "relative",
                      overflow: "hidden",
                      border: "1px solid #111",
                      borderRadius: "16px",
                      boxShadow:
                        hoveredCard === project.id
                          ? "0 16px 40px rgba(0,0,0,0.12)"
                          : "0 8px 20px rgba(0,0,0,0.06)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      transform:
                        hoveredCard === project.id
                          ? "translateY(-8px)"
                          : "none",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: { xs: 140, md: 180 },
                        backgroundColor: "transparent", 
                        overflow: "hidden",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={project.background}
                        alt={project.title}
                        sx={{
                          height: { xs: 140, md: 180 },
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </Box>

                    <CardContent
                      sx={{
                        p: 3,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          component="h2"
                          gutterBottom
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            color: "#df4747",
                            fontFamily:
                              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                          }}
                        >
                          {project.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="#fff"
                          sx={{
                            mb: 2,
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            lineHeight: 1.6,
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredCard === project.id ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          onClick={() => handleSeeMore(project.id)}
                          endIcon={
                            <ArrowForwardIosIcon sx={{ fontSize: "0.8rem" }} />
                          }
                          sx={{
                            fontWeight: 600,
                            color: "#df4747",
                            textTransform: "none",
                            p: 0,
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#c63030",
                            },
                          }}
                        >
                          View Details
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
