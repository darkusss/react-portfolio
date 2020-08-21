import React from "react";
import {HomeWrapper} from "./home.style";

export default function Home() {
    return (
        <HomeWrapper>
            <h1>Hi! I am Vlad Kryvokoniev </h1>
            <h2>and am struggling with web development issues</h2>
            <p>
                You can find me on:
                {' '}
                <a href="https://github.com/darkusss" target="_blank"> Github</a>
                {', '}
                <a href="https://twitter.com/VladjSam" target="_blank">Twitter</a>
            </p>
        </HomeWrapper>
    );
}
