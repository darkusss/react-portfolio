import React, {useState, useCallback} from 'react';
import {Wrapper, StyledButton} from './other.style';
import {Fact} from "../../utils/types";

export default function Other() {
    const [fact, setFact]: any = useState({});

    const getFact: (url: string) => Promise<Fact> = async (url) => {
        return fetch(url).then((response) => response.json());
    }

    const onGetFact = useCallback(async () => {
        setFact(await getFact('https://uselessfacts.jsph.pl/random.json?language=en'));
    }, [fact])

    return (
        <Wrapper>
            <h1>Testing get requests</h1>
            <div>
                <StyledButton onClick={onGetFact}>
                    Get random fact!
                </StyledButton>
                <div>
                    <h2>{fact.text}</h2>
                </div>
            </div>
        </Wrapper>
    );
}