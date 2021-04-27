import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: calc(100vh - (50px + 1.5em));
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
`;

export const Heading = styled.h1`
  clip-path: polygon(55% 0, 75% 100%, 45% 100%, 25% 0);
	background: linear-gradient(to right, blueviolet 50%, hotpink 50%);
  -webkit-background-clip: text;
  color: transparent;
`;
