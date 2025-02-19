import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Details.css";
import image from "./final-df.png";
import image2 from "./hw.png";
import image3 from "./hw2.png";
import image4 from "./dataout-lab3.png";
import image5 from "./lab3.png";
import image6 from "./finance-df-1.png";
import image7 from "./finance-csv.png";
import image8 from "./dataout-hw1.png";
import image9 from "./hw1-sub.png";
import image10 from "./CalendarSS.png";
import image11 from "./SMS-SS.png";
import image12 from "./crud-table.png";
import image13 from "./add-user.png";
import image14 from "./mobile-app.png";
import image15 from "./mobile-app-create.png";
import TopBar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const projectData = {
  1: {
    title: "TintTek Website",
    introduction:
      "Developed a responsive website for TintTek, enhancing user experience and showcasing their services effectively. The site features a modern design, intuitive navigation, and dynamic elements to engage users. Leveraging technologies like React, CSS, and modern web development practices, the project demonstrates my ability to create functional and visually appealing digital experiences tailored to client needs.",
    technologies: ["Javascript", "React", "CSS", "Node.js", "Git", "GitHub"],
    images: [image7, image6, image],
    captions: [
      "",
    ],
    evaluatedData: [
      "Page Load Time",
      "Bounce Rate",
      "Average Session Duration",
      "User Feedback",
      "Conversion Rate",
      "Mobile Responsiveness",
    ],
    analysis: [
      "The primary goal of this project was to create a responsive, user-friendly website that effectively showcased TintTek's services and enhanced its online presence. During the development process, I focused on ensuring a seamless user experience through intuitive navigation, modern design elements, and clear content structure.",
      "One of the key challenges was optimizing the website for both desktop and mobile devices to provide a consistent experience across all screen sizes. To address this, I utilized CSS media queries and a flexible layout design, ensuring responsiveness and accessibility. Additionally, integrating dynamic features such as client-side routing with React Router and interactive UI elements required careful planning and testing to maintain performance and usability.",
      "Through this project, I successfully delivered a polished and professional website that aligns with the brand's identity and effectively communicates its mission to users. The experience allowed me to refine my skills in frontend development, responsive design, and problem-solving while delivering a product that meets both functional and aesthetic goals.",
      "The website is hosted on GitHub Pages, providing a reliable and accessible platform for users to explore TintTek's offerings. The deployment process involved configuring the repository for static site hosting, ensuring that all assets were correctly linked and optimized for performance.",
    ],
  },
  2: {
    title: "Data-Driven Insights from an Exercise Contest",
    introduction:
      "This project involved scraping data from an exercise contest leaderboard website to extract user metrics, including average sleep, water intake, steps, etc. Using Python and BeautifulSoup, I collected and parsed the data, cleaned it for consistency, and output it into a structured CSV file. This allowed for further analysis and insights into user performance trends over time.",
    technologies: [
      "Python",
      "Web Scraping",
      "Data Parsing",
      "Data Cleaning",
      "Requests",
      "Beautiful Soup",
      "CSV Module",
      "Throttling",
    ],
    images: [image2, image9, image8],
    captions: [
      "Leaderboard from website",
      "Sub-page wth additional data for each athlete",
      "Outputted CSV displaying the top ranking athletes as well with their data from each day of the competition",
    ],
    evaluatedData: [
      "Rank",
      "Average Sleep",
      "Average Water",
      "Average Steps",
      "Metric",
      "Hours of Sleep",
      "Oz. Water",
      "Steps",
    ],
    analysis: [
      " I evaluated user metrics such as average sleep, water intake, and steps across different individuals. By organizing the data into a structured format, I was able to compare user performance and identify patterns in daily activity. The analysis provided insights into top-performing users, correlations between metrics, and trends over time, offering a clear view of the participants' health habits.",
    ],
  },
  3: {
    title: "Adonai Innovations Website",
    introduction:
      "For this project, I designed and developed a responsive and user-friendly website for Adonai Innovations to enhance its online presence and effectively showcase its services. The site features a sleek and modern design, intuitive navigation, and dynamic elements to engage users. Leveraging technologies like React, CSS, and modern web development practices, the project demonstrates my ability to create functional and visually appealing digital experiences tailored to client needs.",
    technologies: [
      "Javascript",
      "React",
      "CSS",
      "React Router",
      "Git",
      "GitHub",
      "Figma",
    ],
    images: [image3],
    captions: ["Final CSV Output"],
    evaluatedData: [],
    analysis: [
      "The primary goal of this project was to create a responsive, user-friendly website that effectively showcased Adonai Innovations' services and enhanced its online presence. During the development process, I focused on ensuring a seamless user experience through intuitive navigation, modern design elements, and clear content structure.",
      "One of the key challenges was optimizing the website for both desktop and mobile devices to provide a consistent experience across all screen sizes. To address this, I utilized CSS media queries and a flexible layout design, ensuring responsiveness and accessibility. Additionally, integrating dynamic features such as client-side routing with React Router and interactive UI elements required careful planning and testing to maintain performance and usability.",
      "Through this project, I successfully delivered a polished and professional website that aligns with the brand's identity and effectively communicates its mission to users. The experience allowed me to refine my skills in frontend development, responsive design, and problem-solving while delivering a product that meets both functional and aesthetic goals.",
    ],
  },
  4: {
    title: "Smart Task Manager: A Personal Calendar Companion",
    introduction:
      "This project involved developing a mobile calendar companion app using React Native and Node.js to help users efficiently track and manage their assignments, deadlines, and reminders. \
      The app allows users to add, edit, update, and delete assignments, ensuring that their schedules remain organized. Additionally, automated notifications are triggered when an assignment due date approaches, helping users stay on top of their tasks. \
      The project leverages SQLite3 for local storage, providing an offline-accessible solution for managing task data. By implementing push notifications, users receive timely reminders about upcoming due dates. This project enhanced my skills in full-stack mobile development, \
      state management, and working with offline databases, as well as integrating notification services for user engagement.",
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "SQLite3",
      "Push Notifications",
      "REST API",
      "React Navigation",
      "Cron Jobs",
    ],
    images: [image14, image15],
    captions: [
      "Main dashboard displaying upcoming assignments",
      "Notification reminding the user of an upcoming due date",
    ],
    evaluatedData: ["CRUD Operations", "Reminders & Notifications", "Offline Data Storage"],
    analysis: [
      "The backend was developed using Node.js with Express.js to handle RESTful API requests for storing, updating, and deleting assignments in an SQLite3 database. \
      A background scheduling system using cron jobs ensures that upcoming due dates trigger push notifications for users.",
      "The frontend was built using React Native, with React Navigation for seamless movement between the task list, task creation, and settings screens. \
      Context API (or Redux) was used to manage state efficiently, ensuring smooth interactions across the app.",
      "The project also focused on performance optimization, implementing throttling techniques to optimize API calls and using efficient database queries to minimize lag and load times. \
      Through this process, I gained hands-on experience with mobile development, state management, and integrating backend services for real-time notifications.",
    ],
  },

  5: {
    title: "Personal Calendar SMS Reminder Service",
    introduction: [
      "The Automated Assignment Reminder System is designed to send timely SMS notifications for upcoming due assignments. Built using Python, cron, and the Textbelt API, this system automates the process of notifying users by scheduling daily messages, \
    ensuring that critical tasks are not overlooked. The system reads assignment data from an Excel file, checks for due dates, and consolidates reminders into a single text message if multiple assignments are due on the same day.",
    ],
    technologies: ["Python", "cron", "TextBelt API", "Pandas", "Excel"],
    images: [image10, image11],
    captions: ["Schedule using Excel", "Example text message"],
    evaluatedData: ["Academic-Calendar.csv"],
    analysis: [
      "The Automated Assignment Reminder System was designed to address the challenge of keeping track of multiple assignments and due dates. The primary goal was to create an efficient and automated way to remind users of upcoming deadlines, reducing the risk of missed tasks.\
      The system integrates Python, cron, and the Textbelt API to ensure daily SMS notifications are sent automatically. By using cron for scheduling, the solution runs without the need for manual intervention. Python, coupled with Pandas, processes an Excel file containing assignment data, \
      checks for due dates, and consolidates reminders into a single message per day if multiple assignments are due. This project improves user productivity by automating reminders and ensures that important deadlines are met. \
      It also demonstrates the power of task automation through scripting and scheduling, along with the effective use of APIs for communication.",
    ],
  },
  6: {
    title: "Interactive Web App for CRUD Operations",
    introduction: [
      "Developed a user management interface using React and Material-UI, leveraging DataGrid for dynamic data rendering, pagination, and CRUD operations. The frontend connects to a Node.js backend that serves as the API layer, enabling seamless communication with an SQLite3 database hosted locally on a Mac terminal. This project focused on creating an intuitive and responsive UI while integrating a robust backend to handle user data storage, retrieval, and updates efficiently.",
    ],
    technologies: ["React", "Material-UI", "Node.js", "REST API", "SQLite3"],
    images: [image12, image13],
    captions: ["Table view from user interface", "Add user functionality"],
    evaluatedData: ["database.db"],
    analysis: [
      "For the data analysis portion, utilized SQLite3 to query and analyze user data, identifying patterns and ensuring data integrity. Designed efficient database schemas and queries to support dynamic rendering on the frontend, while leveraging Node.js for processing and formatting data before serving it to the React UI. This ensured accurate and meaningful insights were displayed in the user management interface.",
    ],
  },
};
const Details = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const project = projectData[Number(projectId)];

  if (!project) {
    return <p>Project not found</p>;
  }

  const openImageModal = (image) => setSelectedImage(image);

  return (
    <div className="page-container">
      <TopBar />
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <main className="project-details">
        {/* Page Header */}
        <header className="details-header">
          <h1>{project.title}</h1>
        </header>

        {/* Content Layout */}
        <div className="content-layout">
          {/* Main Content Section */}
          <section className="project-content">
            <section className="project-intro">
              <h2>Introduction</h2>
              <p>{project.introduction}</p>
            </section>

            <section className="technologies-section">
              <h2>Tools and Techniques Employed</h2>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </section>

            <section className="evaluated-data">
              <h2>Evaluated Data</h2>
              {project.evaluatedData && project.evaluatedData.length > 0 ? (
                <ul>
                  {project.evaluatedData.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
              ) : (
                <p>No evaluated data available for this project.</p>
              )}
            </section>

            <section className="data-analysis">
              <h2>Analysis</h2>
              <p>{project.analysis}</p>
            </section>
          </section>

          {/* Images Section */}
          {/* Images Section */}
          <aside className="image-section">
            <h2>Images</h2>
            {projectId === "3" ? (
              <div className="iframe-container">
                <iframe
                  src="https://adonaiinnovations.com" // Replace with actual Adonai website URL
                  title="Adonai Innovations Website"
                  width="100%"
                  height="900px"
                  frameBorder="0"
                  style={{ borderRadius: "8px" }}
                  allowFullScreen
                ></iframe>
              </div>
            ) : projectId === "1" ? ( // Add iframe for TintTek website
              <div className="iframe-container">
                <iframe
                  src="https://erikvaldez23.github.io/TintTek-Website/" // Replace with actual TintTek website URL
                  title="TintTek Website"
                  width="100%"
                  height="900px"
                  frameBorder="0"
                  style={{ borderRadius: "8px" }}
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="image-grid">
                {project.images.map((img, index) => (
                  <figure key={index} className="image-wrapper">
                    <img
                      src={img}
                      alt={`Project Screenshot ${index + 1}`}
                      className="project-image"
                      onClick={() => openImageModal(img)}
                    />
                    <figcaption className="image-caption">
                      {project.captions[index]}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </aside>
        </div>
      </main>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full View" />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Details;
