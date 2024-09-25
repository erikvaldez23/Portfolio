import React from "react";
import "./Courses.css";

const Courses = () => {
    return(
        <div className="section" id="courses">
  <hr className="line" />
  <h1>RELEVANT COURSES</h1>
  <div className="courses-container">
    <div className="course-box">
      <h2>Database Management Systems</h2>
      <p>In the Database Management Systems course, I gained a thorough understanding of database design, implementation, and management, with a strong emphasis on the relational model. Through hands-on experience, I learned to use SQL to create, query, and manage databases. 
         A key project involved designing and building a functional database system from scratch, and writing complex SQL queries to effectively manipulate and retrieve data. This course provided me with a solid foundation in database architecture and practical skills in SQL.
      </p>
    </div>
    <div className="course-box">
      <h2>Analytics and Development With Python</h2>
      <p>Analytics and Development with Python is a course designed to equip students with the skills to analyze and interpret complex data sets using Python. 
          The course covers essential Python programming concepts, data manipulation techniques, and the use of powerful libraries such as Pandas, NumPy, and Matplotlib. 
          Students learn to develop data-driven applications and perform statistical analysis, enabling them to derive meaningful insights and support decision-making processes in various domains. 
          The course emphasizes practical, hands-on experience in building efficient and scalable data solutions.
      </p>
    </div>
    <div className="course-box">
      <h2>Business Intelligence</h2>
      <p>
          In the course, students gained hands-on experience in web data collection, learning to identify structures in web pages for data capture, write effective web scraping routines, and understand the legal implications of scraped data. 
          The course also explored the differences between web scraping and web crawling. In the ETL (Extract, Transform, Load) segment, students learned to distinguish between tool-based and code-based ETL processes, implement best practices in ETL design, and perform data cleaning using both methodologies. 
          Additionally, the course covered data acquisition techniques, focusing on enhancing data value through merging, accounting for potential pitfalls, and evaluating the viability of disparate datasets.
      </p>
    </div>
    <div className="course-box">
      <h2>Information Systems Analysis and Design</h2>
      <p>
          In this capstone course, students mastered advanced systems analysis and design (SA&D) concepts, applying them to real-world cases and a semester-long team project. 
          Through a blend of lectures, hands-on exercises, and case studies, students learned to effectively employ tools and methods across the four phases of SA&D: planning, analysis, design, and implementation. 
          The course also provided an in-depth understanding of the SCRUM framework and practical experience in developing a small CRUD business application. 
          Additionally, students honed their skills in both written and oral reporting on SA&D projects.
      </p>    
    </div>
    <div className="course-box">
      <h2>Information Security</h2>
      <p>
          In Information Security, students developed expertise in various cybersecurity domains, including symmetric and asymmetric cryptography, such as block ciphers and public key infrastructure. 
          The course covered the principles and practical uses of hash functions, along with business-oriented access control guidelines for authentication and authorization. Students also gained knowledge of essential security protocols like SSH, SSL, IPSec, and Kerberos. 
          Additionally, the course addressed software security, highlighting vulnerabilities, reverse engineering, and various types of malware, preparing students to effectively identify and mitigate security threats.
      </p>    
    </div>
    <div className="course-box">
      <h2>Data Communication and Security</h2>
      <p>
          This course provided a comprehensive understanding of the Unix operating system, network security, and data communications. Students gained hands-on experience with operating system installation, file systems, and basic Unix/Windows commands. 
          They learned user and system administration, including creating users/groups, shell scripting, and managing processes. The course also covered network setup and security, focusing on router configuration, secure shell, and web servers. 
          Additionally, students explored key data communication technologies, including TCP/IP, subnets, and protocols like IPV4, IPV6, and DNS, equipping them with the skills to implement and secure networks effectively.
      </p>    
    </div>
  </div>
</div>
    )
}

export default Courses;