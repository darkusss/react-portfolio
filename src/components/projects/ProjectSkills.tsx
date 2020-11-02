import React from "react";

const ProjectSkills = ({projectSkills}: { projectSkills: string[] }): JSX.Element => {
    return (
        <div className="project-skills">
            {projectSkills.map((skill, skillKey) => {
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
