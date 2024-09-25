// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-section">
//   <div className="contact-left">
//     <h2 className="header">Contact Me</h2>
//     <form className="contact-form">
//       <div className="form-group">
//         <input type="text" id="name" name="name" placeholder="Name" required />
//       </div>
//       <div className="form-group">
//         <input type="email" id="email" name="email" placeholder="Email" required />
//       </div>
//       <div className="form-group">
//         <textarea id="message" name="message" placeholder="Message" required></textarea>
//       </div>
//       <button type="submit" className="submit-button">Send Message</button>
//     </form>
//   </div>


//   <div className="contact-info">
//   <p>Here is a good place to contact me!</p>
//   <ul>
//     <li>
//       <a href="mailto:erikkvaldez@gmail.com" target="_blank" rel="noopener noreferrer">
//         <i className="fas fa-envelope"></i> erikkvaldez@gmail.com
//       </a>
//     </li>
//     <li>
//       <a href="https://www.instagram.com/erikvaldez_/" target="_blank" rel="noopener noreferrer">
//         <i className="fab fa-instagram"></i> @erikvaldez_
//       </a>
//     </li>
//     <li>
//       <a href="https://github.com/erikvaldez23" target="_blank" rel="noopener noreferrer">
//         <i className="fab fa-github"></i> erikvaldez23
//       </a>
//     </li>
//   </ul>
// </div>
//   </div>

//   );
// };

// export default Contact;

import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Contact.css'; // Add your CSS file for styling

const Contact = () => {
  return (
    <div className="contact-section">
      <hr className="contact-line" />
      <h2>Contact</h2>
      <p>Get in touch or shoot me an email directly on <a href="mailto:erikkvaldez@gmail.com">erikkvaldez@gmail.com</a></p>
      
      <div className="social-icons">
        <a href="mailto:erikkvaldez@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://linkedin.com/in/erik-valdez23" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/erikvaldez23" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.instagram.com/erikvaldez_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>

      <p className="credits">Design & Developed by Erik Valdez</p>
    </div>
  );
}

export default Contact;
