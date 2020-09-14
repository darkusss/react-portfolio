import React, { useState } from "react";
import test from "../../assets/test.jpg";
import { StyledProjects } from "./projects.style";
import ProjectSkills from "./ProjectSkills";
import ProjectLinks from "./ProjectLinks";

export default function Projects(): JSX.Element {
  const [projectsData, setProjectsData] = useState([
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

  const projectsInfos = projectsData.map((projectData, key) => {
    return (
      <div className="project" key={"project-" + key}>
        <img
          className="project-image"
          src={projectData.img}
          alt="project img"
        />
        <div className="project-content">
          <h3 className="project-title">{projectData.title}</h3>
          <p className="project-desc">{projectData.desc}</p>
          <ProjectSkills projectSkills={projectData.skills} />
          <div className="project-links">
            <ProjectLinks projectData={projectData} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Projects</h1>
      <StyledProjects>{projectsInfos}</StyledProjects>
    </div>
  );
}
