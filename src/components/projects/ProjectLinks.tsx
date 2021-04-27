import React from 'react';
import { ProjectItem } from '../../utils/types';

interface Props {
	projectData: ProjectItem;
}

const ProjectLinks= ({ projectData }: Props): JSX.Element => {
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
			{projectData.liveDemo ? (
				<a href={projectData.liveDemo} target="_blank" rel="noopener noreferrer">
					<img
						src="https://img.icons8.com/ios/50/000000/visible.png"
						alt="opened eye"
					/>
				</a>
			) : (
				<span className="hidden-eye">
					<img
						src="https://img.icons8.com/ios/50/000000/hide.png"
						alt="hidden eye"
					/>
				</span>
			)}
		</div>
	);
};

export default ProjectLinks;
