import React, { useState } from "react";
import test from "../../assets/test.jpg";
import { StyledProjects } from "./projects.style";

export default function Projects() {
  const [data, setData] = useState([
    {
      img: test,
      title: "Todo list",
      desc: "The todo list has fun design :)",
      skills: ["React", "CSS"],
      githubRepo: "https://github.com/darkusss/todo-list",
      liveDemo: undefined,
    },
    {
      img: test,
      title: "Ui-library",
      desc: "The project I am proud of",
      skills: ["Vue"],
      githubRepo: "https://github.com/darkusss/UI-library",
      liveDemo: undefined,
    },
  ]);

  const convertedData = data.map((datum, key) => {
    const projectSkills = datum.skills.map((skill, skillKey) => {
      return (
        <span className="project-skill" key={"skill-" + skillKey}>
          {skill}
        </span>
      );
    });
    return (
      <div className="project" key={"project-" + key}>
        <img className="project-image" src={datum.img} alt="project img" />
        <div className="project-content">
          <h3 className="project-title">{datum.title}</h3>
          <p className="project-desc">{datum.desc}</p>
          <div className="project-skills">{projectSkills}</div>
          <div className="project-links">
            <a
              href={datum.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/windows/32/000000/github.png"
                alt="github"
              />
            </a>
            <a
              href={datum.liveDemo ? datum.liveDemo : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {datum.liveDemo ? (
                <img
                  src="https://img.icons8.com/ios/50/000000/visible.png"
                  alt="eye"
                />
              ) : (
                <img
                  src="https://img.icons8.com/ios/50/000000/hide.png"
                  alt="hide-eye"
                />
              )}
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Projects</h1>
      <StyledProjects>{convertedData}</StyledProjects>
    </div>
  );
}
