import React from "react";
import styles from "../styles/pages/_experience.scss";

const Experience = () => {
  return (
    <span style={styles}>
      <div class="content">
        <h2>Education - University of Maine</h2>
        Graduating in May of 2024 with a BS in Computer Science <br />
        Dean's List: 2022, 2023 <br /> <br />
        Coursework: Discrete Structures, Computer Architecture,
        Operating Systems, Programming Languages, <br />
        Data Structures and Algorithms, Introduction to Software Engineering,
        Introduction to Privacy Engineering, Introduction to Cybersecurity
      </div>

      <div class="content">
        <h2>Current Employment - Systems Engineering</h2>
        SOC Analyst performing incident monitoring with and
        maintenance of FortiSIEM. Also performing security audits and threat research.
        <br />
        <a href="https://www.systemsengineering.com/">Systems Engineering</a>
      </div>

      <div class="content">
        <h2>Research Interests - Privacy Engineering and Regulatory Compliance Lab </h2>
        Student Researcher focusing on enabling security and privacy preserving practices<br />
        <a href="https://www.sepidehghanavati.com/research">Info about PERC Lab</a>
        <h3>Current Work</h3>
        Natural Language Processing for task of mapping software developer questions to specific GDPR articles
        <h3>Publications</h3>
        <a href="https://arxiv.org/ftp/arxiv/papers/2306/2306.11174.pdf">[1]</a>
        Evaluating Privacy Questions From Stack Overflow: Can ChatGPT Compete?
        <br />
      </div>

      <div class="content">
        <h2>Certifications</h2>
        CompTIA Security+ 
        <br />
      </div>
    </span>
  );
};

export default Experience;
