import React from 'react';
import { HomeWrapper, Heading } from './home.style';

const Home: React.FC = () => {
	return (
		<HomeWrapper>
			<Heading>Hello.</Heading>
			<h2>I am a Front-end developer.</h2>
			<p>
				You can find me on:{' '}
				<a
					href="https://github.com/darkusss"
					rel="noopener noreferrer"
					target="_blank"
				>
					Github
				</a>
				{', '}
				<a
					href="https://twitter.com/VladjSam"
					rel="noopener noreferrer"
					target="_blank"
				>
					Twitter
				</a>
			</p>
		</HomeWrapper>
	);
};

export default Home;
