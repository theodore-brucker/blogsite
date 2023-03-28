import React from "react";

const Home = () => {
  return (
    <span>
      <div class="content">
        <h2>Welcome</h2>
        Welcome to my personal website, I am hosting using a combination of
        OpenliteSpeed and Cloudflare
        <br />
        The backend is written in Go <br />
        The frontend is written in Node/React <br />
      </div>
      <div class="content">
        <h2>Get in touch with me</h2>
        Via email theodore.brucker@maine.edu <br />
        <a href="https://www.linkedin.com/in/theobrucker">Via LinkedIn</a>
      </div>
    </span>
  );
};

export default Home;
