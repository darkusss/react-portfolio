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
      desc: "Todo list with sub-tasks",
      skills: ["React", "Redux"],
      githubRepo: "https://github.com/darkusss/todo-list",
      liveDemo: undefined,
    },
    {
      img: test,
      title: "Ui-library",
      desc: "Simple UI-library has a lot of components",
      skills: ["Vue"],
      githubRepo: "https://github.com/darkusss/UI-library",
      liveDemo: undefined,
    },
    {
      img:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FGS5aVofpjj3xAZmMMp2hBuYGmpE%3D%2F0x133%3A3151x1905%2F1600x900%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F49901753%2Fnetflixlogo.0.0.png&f=1&nofb=1",
      title: "Netflix clone",
      desc: "The project is a clone of netflix web app with some interactions",
      skills: ["React", "Axios", "Firebase"],
      githubRepo: "https://github.com/darkusss/netflix-clone",
      liveDemo: "https://netflix-clone-2c064.web.app/",
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
          <ProjectLinks projectData={projectData} />
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
