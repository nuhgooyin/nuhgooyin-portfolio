import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [activeSection, setActiveSection] = useState("default");
  const [image, setImage] = useState("images/default-profile.jpg");

  const handleCardClick = (dataImage) => {
    setImage(dataImage);
    setActiveSection(dataImage);
  };

  return (
    <section id="about">
      <h2>Here are a couple of brief things about me:</h2>
      <div className="split-container">
        <div className="image-container">
          <img id="about-image" src={image} alt="Dan Nguyen" />
        </div>
        <div className="content-container">
          <div
            className="dropdown-card"
            onClick={() => handleCardClick("images/skills.jpg")}
          >
            <h3>Technical Skills</h3>
            <div className="dropdown-content">
              <p>[List your technical skills here]</p>
            </div>
          </div>
          <div
            className="dropdown-card"
            onClick={() => handleCardClick("images/work.jpg")}
          >
            <h3>Work Experience</h3>
            <div className="dropdown-content">
              <p>
                So far, I've worked as a Data Analyst at Definity Financial,
                software developer at Savi Finance, etc.
              </p>
            </div>
          </div>
          <div
            className="dropdown-card"
            onClick={() => handleCardClick("images/research.jpg")}
          >
            <h3>Research Experience</h3>
            <div className="dropdown-content">
              <p>[Your research experience here]</p>
            </div>
          </div>
          <div
            className="dropdown-card"
            onClick={() => handleCardClick("images/education-card-image.png")}
          >
            <h3>Education</h3>
            <div className="dropdown-content">
              <p>
                I'm currently specializing in computer science, majoring in
                statistics, and minoring in mathematics at the University of
                Toronto. So far, I've taken courses in...
              </p>
            </div>
          </div>
          <div
            className="dropdown-card"
            onClick={() => handleCardClick("images/extracurricular.jpg")}
          >
            <h3>Extracurriculars</h3>
            <div className="dropdown-content">
              <p>
                [Your professional extracurricular activities, like VP
                positions, etc.]
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-links">
        <h3>
          For more detailed and tailored information, please select the
          appropriate resume:
        </h3>
        <div className="resume-buttons">
          <a
            href="files/Dan_Nguyen_Full_Stack_Resume.pdf"
            className="button resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code"></i> Full Stack Resume
          </a>
          <a
            href="files/hardware-swe-resume.pdf"
            className="button resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-microchip"></i> Hardware SWE Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
