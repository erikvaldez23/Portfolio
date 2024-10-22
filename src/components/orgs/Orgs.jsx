import React from "react";
import './Orgs.css'
import aitp from './aitp.jpeg'
import dsp from './dsp.jpeg'
import ptk from './ptk.png'
// Make sure to import your logo images


const Orgs = () => {
    return(
        <div className="section" id="orgs">
            <hr className="line" />
            <h1>ORGANIZATIONS</h1>
            <div className="orgs-container">
                <div className="orgs-card">
                    <h2>Delta Sigma Pi</h2>
                    <h3>Beta Upsilon Chapter</h3>
                    <p className="date">August 2023 - Present</p>
                    <p>
                        As an officer of Delta Sigma Pi, I led and organized professional development events, facilitated networking opportunities with industry professionals, 
                        and helped manage chapter operations. I collaborated with fellow officers to support career growth and leadership development for members, 
                        while also promoting the values of business ethics and professionalism.
                    </p>
                    <img src={dsp} alt="Delta Sigma Pi Logo" className="companies-logo" />
                </div>
                <div className="orgs-card">
                    <h2>Association of Information Technology Professionals</h2>
                    <h3>Texas Tech University</h3>
                    <p className="date">August 2023 - Present</p>
                    <p>
                        As the Professional Relations Officer for the Association of Information Technology Professionals, I built and maintained connections with industry leaders, 
                        coordinated events to foster professional development, and facilitated networking opportunities for members. My role involved organizing company visits, guest speaker sessions, 
                        and workshops to ensure members had access to valuable career insights and mentorship opportunities in the IT field.
                    </p>
                    <img src={aitp} alt="AITP Logo" className="companies-logo" />
                </div>
                <div className="orgs-card">
                    <h2>Phi Theta Kappa</h2>
                    <h3>Alpha Mu Tau Chapter</h3>
                    <p className="date">October 2022 - Present</p>
                    <p>
                        As a member of Phi Theta Kappa, I was part of an academic honor society that recognizes and encourages scholarly achievement and leadership. I engaged in initiatives focused on community service, 
                        personal development, and academic excellence, while also collaborating with fellow members to promote educational growth and leadership skills.
                    </p>
                    <img src={ptk} alt="Phi Theta Kappa Logo" className="companies-logo" />
                </div>
            </div>
        </div>
    );
};

export default Orgs;
