import FetchAPI from './FetchAPI'
import styles from './App.module.css'

function App() {
  return (
    <ul className={styles.blogList}>
      <h1>About</h1>

      <h2>University of Maine</h2>
      <body> Senior pursuing a BS in Computer Science </body>

      <h2>SOC Analyst</h2>
      <body> Maintaining FortiSIEM and handling incident response //todo insert link to SE info page </body>

      <h2>Privacy Engineering and Regulatory Compliance (PERC) Lab </h2>
      <body> Student Researcher //todo insert link to PERC info page </body>

      <h2>Socials</h2>
        <body>
              <a href="https://www.linkedin.com/in/theobrucker">LinkedIn</a> <br />
              <a href="https://github.com/theodore-brucker">GitHub</a> <br />
        </body>

      <h2>Get In Touch</h2>
        <body>
          email theodore.brucker@maine.edu <br />
          discord thedog#2002
        </body>
  </ul>
  );
}

export default App;