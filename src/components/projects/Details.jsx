import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import image from './final-df.png';
import image2 from "./hw.png"
import image3 from './hw2.png'
import image4 from './dataout-lab3.png'
import image5 from './lab3.png'
import image6 from './finance-df-1.png'
import image7 from './finance-csv.png'
import image8 from './dataout-hw1.png'
import image9 from './hw1-sub.png'
import image10 from './CalendarSS.png'
import image11 from './SMS-SS.png'
import image12 from './crud-table.png'
import image13 from './add-user.png'
import TopBar from '../topbar/Topbar';
import Footer from '../footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const projectData = {
  1: {
    title: "The Impact of School Funding on Academic Performance",
    introduction: "Our project investigates the correlation between increased school funding and academic performance by examining standardized test scores, dropout rates, and graduation rates across various districts.\
     We also analyze demographic factors, such as socioeconomic status, race, and geographic location, to identify what significantly impacts student success. Through visualizing these connections, our aim is to provide data-driven insights that highlight \
     the true effects of educational funding on academic outcomes, offering an objective perspective on efforts to reduce educational disparities and promote equitable opportunities for all students across Texas.",
    technologies: ["Python", "Pandas", "Data Cleaning", "Data Merging", "Matplotlib"],
    images: [image7, image6, image,],
    captions: ["Financial Dataset for PlanoISD 2021 provided by the Texas Education Agency", "Cleaned Datafame with just Total Revenue and Total Expenditures calculated for every school district between the years 2017-2021", "Final Dataframe with all specified infrormation for a total of 10 school district across the years 2017-2021"],
    evaluatedData: [
      "SAT and ACT scores are key metrics for college admissions, reflecting students' academic readiness.",
      "Graduation rates measure the effectiveness of educational programs and interventions.",
      "Dropout rates highlight challenges such as academic struggles and socioeconomic factors.",
      "Median household income reflects the socioeconomic status of communities and affects educational access and opportunities.",
      "Tax rates influence school funding, impacting staffing, facilities, and resources.",
    ],
    analysis: [
      "The data we collected was mostly complete, except for missing standardized test scores (SAT/ACT) from Post. \
        The financial data initially lacked coherence and required extensive cleaning. We organized the cleaned data into Excel, separating financial data into different panels due to its volume. \
        Our datasets, covering 2018-2022, include numerical and categorical data (e.g., Float64, object, string). Financial and academic data came from the Texas Education Agency, while home values were sourced from Zillow and sales tax data from the Federal Reserve of St. Louis. \
        Key variables like year and district were crucial for merging datasets. Initial challenges included handling string values, dollar signs, and commas, which hindered analysis until corrected. Additionally, the job placement data was difficult to analyze due to incomplete information. \
        Our datasets comprise 50 CSVs for finance, 1 for household income, 1 for home value, 10 for academic data, 1 for job placement, and 1 for sales tax."
    ]
  },
  2: {
    title: "Data-Driven Insights from an Exercise Contest",
    introduction: "This project involved scraping data from an exercise contest leaderboard website to extract user metrics, including average sleep, water intake, steps, etc. Using Python and BeautifulSoup, I collected and parsed the data, cleaned it for consistency, and output it into a structured CSV file. This allowed for further analysis and insights into user performance trends over time.",
    technologies: ["Python", "Web Scraping", "Data Parsing", "Data Cleaning", "Requests", "Beautiful Soup", "CSV Module", "Throttling"],
    images: [image2,image9, image8],
    captions: ["Leaderboard from website", "Sub-page wth additional data for each athlete", "Outputted CSV displaying the top ranking athletes as well with their data from each day of the competition"],
    evaluatedData: [
      "Rank", "Average Sleep", "Average Water", "Average Steps", "Metric", "Hours of Sleep", "Oz. Water", "Steps",
    ],
    analysis: [
      " I evaluated user metrics such as average sleep, water intake, and steps across different individuals. By organizing the data into a structured format, I was able to compare user performance and identify patterns in daily activity. The analysis provided insights into top-performing users, correlations between metrics, and trends over time, offering a clear view of the participants' health habits."
    ]
  },
  3: {
    title: "Energy Production and Vendor Analysis",
    introduction: "This project analyzes power generation, field expertise, and vendor performance using Python and Pandas. By merging datasets related to energy production, vendors, and fields, it generates key reports such as Revenue per Kilowatt and Vendor Commission.",
    technologies: ["Python", "Pandas", "Requests", "io.String.IO","CSV Module", "Data Analysis", "Data Merging",],
    images: [image3],
    captions: ["Final CSV Output"],
    evaluatedData: [
      "Vendors",
      "Revenue Produced",
      "Kilowatt Production",
      "Roads",
      "Easement",
      "Vendor",
      "Area of Expertise",
      "Vendor Percent",
      "Revenue per Kilowatt"
    ],
    analysis: [
    "States differ significantly in their efficiency of power generation, as shown by the Revenue per Kilowatt metric. Some states generate more revenue per kilowatt, likely due to better infrastructure, favorable regulations, or higher energy prices. This points to an opportunity for underperforming states to improve their energy production methods or attract more favorable energy contracts.",
    "Vendors with specific areas of expertise (e.g., advanced equipment, energy consulting) were linked to higher revenue production and higher commission percentages. Vendors in high-impact fields tend to drive more profitable power generation, indicating the value of specialized expertise. Companies may benefit from strengthening partnerships with vendors in these key areas.",
    "Filling missing revenue and production data with regional averages maintained the integrity of the analysis. This method allowed for a more complete dataset without introducing bias, ensuring that trends were accurately captured. Using regional and model-based groupings helped provide a more accurate picture of typical performance, revealing which regions consistently performed well or underperformed."
    ]
  },
  4: {
    title:  "Comparative Analysis of Smartphone Specifications",
    introduction: [
    "This project involved analyzing the specifications of various smartphones by scraping data from web sources, cleaning and organizing the information, and outputting it into a structured format for comparison.\
     The goal was to provide an accessible, detailed overview of key smartphone models, allowing users to easily compare different features such as camera capabilities, battery life, storage, and more.",
     "Using web scraping techniques, I gathered product information from multiple sources, including technical specifications, and product descriptions. After consolidating and cleaning the data, I structured it into a CSV file for further analysis. \
     This project not only enhanced my skills in data extraction and processing but also provided valuable insights into the smartphone market by allowing for direct comparisons of key product features."
    ],
    technologies: ["Python", "Web Scraping", "Data Cleaning", "Data Parsing", "CSV Modules", "Requests", "BeautifulSoup", "Throttling"],
    images: [image5, image4],
    captions: ["Phone Details Page for Galaxy S20 5G", "Final CSV with all specified data for all phones"],
    evaluatedData: [
      "Galaxy S20 5G",
      "iPhone 11 Pro",
      "Google Pixel 4a"
    ],
    analysis: [
      "In this project, I employed a web scraping technique to extract detailed specifications for multiple smartphones, including the Galaxy S20 5G, from various online sources. \
      The data included product specifications such as camera details, storage capacity, and battery life. Once the raw data was scraped, I focused on cleaning and standardizing the data, \
      ensuring consistency across different data points by eliminating duplicates and handling missing or incomplete information.",
      "The cleaned data was then merged into a single dataset, allowing me to conduct meaningful comparisons between different smartphone models. I performed data analysis by categorizing features (e.g., camera specifications, battery life, storage capacity), \
      allowing for an easy comparison between different phone models. The final output was structured into a CSV file, making it readily available for further analysis or visualization.",
      "Through this process, I was able to identify key differences in product features, such as varying camera resolutions, battery capacities, and storage options, providing valuable insights into consumer options in the smartphone market."
    ]
  },
  5: {
    title:  "Personal Calendar SMS Reminder Service",
    introduction: [
    "The Automated Assignment Reminder System is designed to send timely SMS notifications for upcoming due assignments. Built using Python, cron, and the Textbelt API, this system automates the process of notifying users by scheduling daily messages, \
    ensuring that critical tasks are not overlooked. The system reads assignment data from an Excel file, checks for due dates, and consolidates reminders into a single text message if multiple assignments are due on the same day."
    ],
    technologies: ["Python", "cron", "TextBelt API", "Pandas", "Excel"],
    images: [image10, image11],
    captions: ["Schedule using Excel", "Example text message"],
    evaluatedData: [
      "Academic-Calendar.csv",
    ],
    analysis: [
      "The Automated Assignment Reminder System was designed to address the challenge of keeping track of multiple assignments and due dates. The primary goal was to create an efficient and automated way to remind users of upcoming deadlines, reducing the risk of missed tasks.\
      The system integrates Python, cron, and the Textbelt API to ensure daily SMS notifications are sent automatically. By using cron for scheduling, the solution runs without the need for manual intervention. Python, coupled with Pandas, processes an Excel file containing assignment data, \
      checks for due dates, and consolidates reminders into a single message per day if multiple assignments are due. This project improves user productivity by automating reminders and ensures that important deadlines are met. \
      It also demonstrates the power of task automation through scripting and scheduling, along with the effective use of APIs for communication."
    ]
  },
  6: {
    title:  "Interactive Web App for CRUD Operations",
    introduction: [ 
      "Developed a user management interface using React and Material-UI, leveraging DataGrid for dynamic data rendering, pagination, and CRUD operations. The frontend connects to a Node.js backend that serves as the API layer, enabling seamless communication with an SQLite3 database hosted locally on a Mac terminal. This project focused on creating an intuitive and responsive UI while integrating a robust backend to handle user data storage, retrieval, and updates efficiently."
    ],
    technologies: ["React", "Material-UI", "Node.js", "REST API", "SQLite3"],
    images: [image12, image13],
    captions: ["Table view from user interface", "Add user functionality"],
    evaluatedData: [
      "database.db"
    ],
    analysis: [
      "For the data analysis portion, utilized SQLite3 to query and analyze user data, identifying patterns and ensuring data integrity. Designed efficient database schemas and queries to support dynamic rendering on the frontend, while leveraging Node.js for processing and formatting data before serving it to the React UI. This ensured accurate and meaningful insights were displayed in the user management interface."
    ]
  }
};

const Details = () => {
  const { projectId } = useParams(); // Capture the projectId from the URL
  const imageRef = useRef(null);

  // Convert projectId to a number
  const project = projectData[Number(projectId)];

  if (!project) {
    return <p>Project not found</p>; // Handle case where projectId doesn't match any data
  }

  return (
    <div>
      <TopBar />
      <button className="back-button" onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <section className="project-details">
        <header>
          <h1>{project.title}</h1>
        </header>

        <div className="project-content-wrapper">
          <div className="project-content">
            {/* Intro Section */}
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

            {/* Evaluated Data Section */}
            <section className="evaluated-data">
              <h2>Evaluated Data</h2>
              <ul>
                {project.evaluatedData.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </section>

            {/* Data Analysis Section */}
            <section className="data-analysis">
              <h2>Data Analysis</h2>
              <ul>
                {project.analysis.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="image-section">
              <h2>Images</h2>
              <div className="image-container" ref={imageRef}>
                {project.images.map((img, index) => (
                  <div key={index} className="image-wrapper">
                    <img
                      src={img}
                      alt={`Project Screenshot ${index + 1}`}
                      className="project-image"
                    />
                    {/* Add caption below each image */}
                    <p className="image-caption">{project.captions[index]}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </section>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Details;