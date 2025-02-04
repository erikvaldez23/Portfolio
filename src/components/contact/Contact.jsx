import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">
        Feel free to reach out—let’s connect and explore how we can collaborate on exciting projects!
      </p>
      <div className="contact-content">
        {/* Left Section: Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <span className="icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>Texas Tech University <br /> Lubbock, TX</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <div>
              <h3>Call Me</h3>
              <p>(469) 386-7877</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">📧</span>
            <div>
              <h3>Email Me</h3>
              <p>erikkvaldez@gmail.com</p>
            </div>
          </div>
          {/* Embedded Google Map */}
          <iframe
            className="map"
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8299093627054!2d-101.87574318480378!3d33.58456264833109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe08c7a244e717%3A0x6c8a2df178b8e2f1!2sTexas%20Tech%20University!5e0!3m2!1sen!2sus!4v1632897641513!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
