import React from "react";
import "./Projects.css"; // Create this CSS file for styling

const Projects = () => {
  return (
    <section id="projects">
      <h2>Major Projects</h2>
      <p>
        To see my other projects, feel free to visit my{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repo!
        </a>
      </p>
      {/* Add project details here */}
    </section>
  );
};

export default Projects;
