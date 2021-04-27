import React, { useState } from 'react';
import noDemo from '../../assets/no-signal.jpg';
import { StyledProjects } from './projects.style';
import ProjectSkills from './ProjectSkills';
import ProjectLinks from './ProjectLinks';
import { ProjectItem } from '../../utils/types';

function Projects(): JSX.Element {
	const [projectsData] = useState<ProjectItem[]>([
		{
			img: noDemo,
			title: 'Todo list',
			desc: 'Todo list that has a killer-feature such as sub-tasks ',
			skills: ['React', 'Redux'],
			githubRepo: 'https://github.com/darkusss/todo-list',
		},
		{
			img: noDemo,
			title: 'Ui-library',
			desc: 'UI-library that has a common components such as: Button, Table and so forth',
			skills: ['Vue'],
			githubRepo: 'https://github.com/darkusss/UI-library',
		},
		{
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FGS5aVofpjj3xAZmMMp2hBuYGmpE%3D%2F0x133%3A3151x1905%2F1600x900%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F49901753%2Fnetflixlogo.0.0.png&f=1&nofb=1',
			title: 'Netflix clone',
			desc: 'This is a landing of netflix main page with lots of movie previews',
			skills: ['React', 'Axios', 'Firebase'],
			githubRepo: 'https://github.com/darkusss/netflix-clone',
			liveDemo: 'https://netflix-clone-2c064.web.app/',
		},
	]);

	const projectsInfo = projectsData.map((projectData) => {
		return (
			<div className="project" key={'project-' + projectData.title}>
				<img
					className="project-image"
					src={projectData.img}
					alt="project img"
				/>
				<div className="project-content">
					<h3 className="project-title">{projectData.title}</h3>
					<p className="project-desc">{projectData.desc}</p>
					<ProjectSkills projectSkills={projectData.skills}/>
					<ProjectLinks projectData={projectData}/>
				</div>
			</div>
		);
	});

	return (
		<div>
			<h1>Projects</h1>
			<StyledProjects>{projectsInfo}</StyledProjects>
		</div>
	);
}

export default Projects;
