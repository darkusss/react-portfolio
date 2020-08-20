import React, { useState } from "react";
import test from "../../assets/test.jpg";
import "./projects.css";

export default function Projects() {
  const [data, setData] = useState([
    {
      img: test,
      title: "Todo list",
      githubRepo: "https://github.com/darkusss/todo-list",
      liveDemo: undefined,
    },
  ]);

  const convertedData = data.map((datum, key) => {
    return (
      <div className="project" key={"project-" + key}>
        <div className="open-zone">
          <img src={datum.img} />
          <div className="close-zone">
            <h3>{datum.title}</h3>
            <div className="project-links">
              <a
                href={datum.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              {datum.liveDemo ? (
                <a
                  href={datum.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                <p>No demo</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">{convertedData}</div>
    </div>
  );
}
