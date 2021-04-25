import React from 'react';
import { ProjectItem } from '../../utils/types';

const ProjectLinks = ({ projectData }: { projectData: ProjectItem }): JSX.Element => {
	return (
		<div className="project-links">
			<a
				href={projectData.githubRepo}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="https://img.icons8.com/windows/32/000000/github.png"
					alt="github"
				/>
			</a>
			<a
				href={projectData.liveDemo ? projectData.liveDemo : '#'}
				target="_blank"
				rel="noopener noreferrer"
			>
				{projectData.liveDemo ? (
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
	);
};

export default ProjectLinks;
