import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h1 className="header">Ashwin Paturi</h1>
      <p className="contact">Email: paturiashwinshastry@cityuniversity.edu | Phone: (475)-308-0259</p>

      <h2>Education</h2>
      <p>Masters in Computer Science, City University of Seattle, 2026</p>

      <h2>Skills</h2>
      <ul className="skills-list">
        <li>React and JavaScript</li>
        <li>HTML and CSS</li>
        <li>Node.js and Express</li>
        <li>Full-Stack Web Development</li>
      </ul>

      <h2>Work Experience</h2>
      <ul className="experience-list">
        <li>
          <strong>Teaching Assistant</strong> – City University of Seattle  
          <p>Helped peers and new students with technical concepts and coursework.</p>
        </li>
        <li>
          <strong>Systems Engineer</strong> – TCS, India  
          <p>Collaborated on projects for Amex USA, providing technical and resource support.</p>
        </li>
      </ul>

      <h2>Projects</h2>
      <ul className="projects-list">
        <li>
          <strong>Mediassist - An ML Application</strong>  
          <p> Provides Medical recommendations based on the dataset segregations of the Scanned Images of MRIs or Medical Imaging Data</p>
        </li>
        <li>
          <strong>SecureBank</strong>  
          <p>A Secure and a transparent financial application for safe mobile banking</p>
        </li>
      </ul>

      <h2>Certifications</h2>
      <ul className="certifications-list">
        <li>AWS Fundamentals Specialization - Coursera (2024)</li>
        <li>AWS Academy Cloud Foundations - AWS Academy</li>
        <li>Python Certification - Udemy</li>
      </ul>
    </div>
  );
};

export default Resume;