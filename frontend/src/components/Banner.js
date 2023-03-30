import React from "react";
import styles from "../styles/layout/_banner.scss";
import { ReactComponent as Logo } from "../imgs/TB.svg";

const Banner = () => {
  return (
    <nav style={styles.nav}>
      <div class="container"> <br/>
        <Logo />  <br/>
        <ul class="navbar">
          <a href="/home">Home</a>
          <a href="/experience">Experience</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/blog">Blog</a>
        </ul>
      </div>
    </nav>
  );
};

export default Banner;
