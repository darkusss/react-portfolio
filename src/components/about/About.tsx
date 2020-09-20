import React from "react";
import { Flex, Circle, Title } from "./about.style";

const About = (): JSX.Element => {
  return (
    <div>
      <h1>About me</h1>
      <Flex>
        <Circle>
          <p>Here you can read about me more</p>
        </Circle>
        <Title>Hi again.</Title>
      </Flex>
      <Flex reverse>
        <Circle>
          <p>I am 18</p>
          <p>I am a learner</p>
          <p>I am an explorer</p>
        </Circle>
        <Title>Me.</Title>
      </Flex>
      <Flex>
        <Circle>
          <p>I like playing around with code.</p>
          <p>I like volunteering</p>
          <p>I like fail</p>
        </Circle>
        <Title>What I like</Title>
      </Flex>
    </div>
  );
};

export default About;
