import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
        </Switch>
    );
}

export default Routes;
