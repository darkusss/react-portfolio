import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./themes/themes";
import { Container } from "./app.style";
import { GlobalStyles } from "./utils/global.style";
import { Tween } from "react-gsap";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

function App(): JSX.Element {
  const [checked, setChecked] = useState(false);

  function onSetTheme(): void {
    setChecked(!checked);
  }

  const headerProps = {
    onSetTheme,
    checked,
  };

  return (
    <ThemeProvider theme={checked ? DarkTheme : LightTheme}>
      <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
        <Container>
          <GlobalStyles />
          <Router basename="/react-portfolio">
            <Header {...headerProps} />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Router>
        </Container>
      </Tween>
    </ThemeProvider>
  );
}

export default App;
