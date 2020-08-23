import React, { useState } from "react";
import { Wrapper, StyledButton } from "./other.style";
import { Fact } from "../../utils/types";

export default function Other() {
  const [fact, setFact] = useState({});

  const getFact: (url: string) => Promise<Fact> = (url) => {
    return fetch(url).then((response) => response.json());
  };

  const onGetFact: () => void = async () => {
    setFact(
      await getFact("https://uselessfacts.jsph.pl/random.json?language=en")
    );
  };

  return (
    <Wrapper>
      <h1>Testing get request</h1>
      <div>
        <StyledButton onClick={onGetFact}>Get random fact!</StyledButton>
        <div>
          <h3>{(fact as Fact).text}</h3>
        </div>
      </div>
    </Wrapper>
  );
}
