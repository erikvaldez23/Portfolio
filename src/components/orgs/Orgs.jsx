import React from "react";
import './Orgs.css';
import aitp from './aitp.jpeg';
import dsp from './dsp.jpeg';
import ptk from './ptk.png';

const Orgs = () => {
    return (
        <div className="section" id="orgs">
            <hr className="line" />
            <h1>ORGANIZATIONS</h1>
            <div className="orgs-container">
                <div className="orgs-card">
                    <h2>Delta Sigma Pi</h2>
                    <h3>Beta Upsilon Chapter</h3>
                    <p className="date">August 2023 - Present</p>
                    <p>
                    As an intramural sports officer for Delta Sigma Pi, I organized and led sports events to promote teamwork, camaraderie, and a healthy lifestyle among members. 
                    I coordinated schedules, managed team registrations, and facilitated communication to ensure successful participation and engagement. 
                    Additionally, I collaborated with fellow officers to foster a sense of community and support member involvement in chapter activities.
                    </p>
                    <a href="https://www.deltasigmapi.org/" target="_blank" rel="noopener noreferrer">
                        <img src={dsp} alt="Delta Sigma Pi Logo" className="companies-logo" />
                    </a>
                </div>
                <div className="orgs-card">
                    <h2>Association of Information Technology Professionals</h2>
                    <h3>Texas Tech University</h3>
                    <p className="date">August 2023 - Present</p>
                    <p>
                    As a member of the Association of Information Technology Professionals (AITP), I participated in networking opportunities, attended events, and engaged in workshops and guest speaker sessions. 
                    These activities provided valuable career insights, mentorship opportunities, and exposure to industry leaders in the IT field.
                    </p>
                    <a href="https://aitp.org/" target="_blank" rel="noopener noreferrer">
                        <img src={aitp} alt="AITP Logo" className="companies-logo" />
                    </a>
                </div>
                <div className="orgs-card">
                    <h2>Phi Theta Kappa</h2>
                    <h3>Alpha Mu Tau Chapter</h3>
                    <p className="date">October 2022 - Present</p>
                    <p>
                        As a member of Phi Theta Kappa, I was part of an academic honor society that recognizes and encourages scholarly achievement and leadership. I engaged in initiatives focused on community service, 
                        personal development, and academic excellence, while also collaborating with fellow members to promote educational growth and leadership skills.
                    </p>
                    <a href="https://www.ptk.org/" target="_blank" rel="noopener noreferrer">
                        <img src={ptk} alt="Phi Theta Kappa Logo" className="companies-logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Orgs;
