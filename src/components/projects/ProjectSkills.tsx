import React from "react";

const ProjectSkills = ({ projectSkills }: any): JSX.Element => {
  return (
    <div className="project-skills">
      {projectSkills.map((skill: any, skillKey: any) => {
        return (
          <span className="project-skill" key={"skill-" + skillKey}>
            {skill}
          </span>
        );
      })}
    </div>
  );
};

export default ProjectSkills;
