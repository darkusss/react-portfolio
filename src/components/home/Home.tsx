import React from 'react';
import { HomeWrapper } from './home.style';

function Home(): JSX.Element {
	return (
		<HomeWrapper>
			<h1>Hello.</h1>
			<h2>I am Vlad Kryvokoniev.</h2>
			<p>
				You can find me on:{' '}
				<a
					href="https://github.com/darkusss"
					rel="noopener noreferrer"
					target="_blank"
				>
					{' '}
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
}

export default Home;
