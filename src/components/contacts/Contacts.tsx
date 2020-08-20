import React, {useState, useCallback} from 'react';
import {ContactsWrapper} from './contacts.style';
import {Fact} from "../../utils/types";

export default function Contacts() {
    const [fact, setFact]: any = useState({});

    const getFact: (url: string) => Promise<Fact> = async (url) => {
        return fetch(url).then((response) => response.json());
    }

    const onGetFact = useCallback(async () => {
        setFact(await getFact('https://uselessfacts.jsph.pl/random.json?language=en'));
        console.log('callback works');
    }, [fact])

    return (
        <ContactsWrapper>
            <h1>Testing get requests</h1>
            <div>
                <button onClick={onGetFact}>
                    Get posts!
                </button>
                <div>
                    <h2>{fact.text}</h2>
                </div>
            </div>
        </ContactsWrapper>
    );
}