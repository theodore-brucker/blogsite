import React, { useState, useEffect } from "react";
import "../styles/pages/_portfolio.scss";

function GithubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        "https://api.github.com/users/theodore-brucker/repos"
      );
      const data = await response.json();
      setRepos(data);
    };
    fetchRepos();
  }, []);

  return (
    <div>
      <h2 class="">GitHub Repositories</h2>
      <div>
        {repos.map((repo) => (
          <div key={repo.id} class="repo-card">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <a href={repo.html_url}>visit</a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default GithubRepos;
