import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./themes/themes";
import { Container } from "./app.style";
import { GlobalStyles } from "./utils/global.style";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

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
      <Container>
        <GlobalStyles />
        <Router>
          <Header {...headerProps} />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Projects} path="/projects" />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
