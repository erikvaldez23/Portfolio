import React from "react";
import "./Cert.css";
import logo from './codecademy.png';
import pythonCert from './Python3-Cert.pdf';
import commandLineCert from './command-line-cert.pdf';
import bashCert from './bash-scripting-cert.pdf';

const Cert = () => {
    const viewCertificate = (certificate) => {
        window.open(certificate, "_blank");
    };

    return (
        <div className="section" id="certificate">
            <hr className="line" />
            <h1>CERTIFICATIONS</h1>
            <div className="certificate-container">
                <div className="certificate-card">
                    <h2>Learn Python 3</h2>
                    <h3>Codecademy</h3>
                    <p className="date">October 20, 2024</p>
                    <p>Completed Codecademy's Learn Python 3 course, gaining hands-on experience with Python programming fundamentals, including control flow, functions, data structures, and basic file handling.</p>
                    <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="Codecademy Logo" className="cert-logo" />
                    </a>
                    <button className="view-cert-button" onClick={() => viewCertificate(pythonCert)}>View Certificate</button>
                </div>
                <div className="certificate-card">
                    <h2>Learn the Command Line</h2>
                    <h3>Codecademy</h3>
                    <p className="date">October 20, 2024</p>
                    <p>Completed Codecademy's Learn the Command Line course, gaining hands-on experience with Unix/Linux commands, file manipulation, and system navigation.</p>
                    <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="Codecademy Logo" className="cert-logo" />
                    </a>
                    <button className="view-cert-button" onClick={() => viewCertificate(commandLineCert)}>View Certificate</button>
                </div>
                <div className="certificate-card">
                    <h2>Learn Bash Scripting</h2>
                    <h3>Codecademy</h3>
                    <p className="date">October 22, 2024</p>
                    <p>Completed the Codecademy Learn Bash Scripting course, gaining skills in automating tasks and managing Unix/Linux environments through scripting.</p>
                    <a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="Codecademy Logo" className="cert-logo" />
                    </a>
                    <button className="view-cert-button" onClick={() => viewCertificate(bashCert)}>View Certificate</button>
                </div>
            </div>
        </div>
    );
};

export default Cert;
