import React from "react";
import styles from "../styles/pages/_bio.scss";

const Bio = () => {
  return (
    <span style={styles}>
      <div class="content">
        <h2>University of Maine</h2>
        Graduating in May of 2024 with a BS in Computer Science <br />
        Dean's List: 2021, 2022 <br /> <br />
        Coursework: Discrete Structures, Computer Architecture,
        Operating Systems, Programming Languages, <br />
        Data Structures and Algorithms, Introduction to Software Engineering,
        Introduction to Privacy Engineering, Introduction to Cybersecurity
      </div>

      <div class="content">
        <h2>Systems Engineering</h2>
        SOC Analyst performing incident monitoring with and
        maintenance of FortiSIEM. Also performing security audits and threat research.
        <br />
        <a href="https://www.systemsengineering.com/">Systems Engineering</a>
      </div>

      <div class="content">
        <h2>Privacy Engineering and Regulatory Compliance Lab </h2>
        Student Researcher <br />
        <a href="https://www.sepidehghanavati.com/research">PERC Lab</a>
      </div>
    </span>
  );
};

export default Bio;
