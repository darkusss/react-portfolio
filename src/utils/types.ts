export interface Theme {
	[key: string]: string;
}

export interface GlobalStyleProps {
	theme: Theme;
}

export interface ProjectItem {
	img: string;
	title: string;
	desc: string;
	skills: string[];
	githubRepo: string;
	liveDemo?: string;
}
