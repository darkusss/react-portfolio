import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './themes/themes';
import { Container } from './app.style';
import { GlobalStyles } from './utils/global.style';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Other from './components/other/Other';

function App() {
  const [ checked, setChecked ] = useState(false);

  function onSetTheme(): void {
    setChecked(!checked);
  }

  const headerProps = {
    onSetTheme,
    checked,
  };

  return (
      <Container>
          <ThemeProvider theme={ checked ? DarkTheme : LightTheme }>
              <Router>
                  <GlobalStyles />
                  <Header { ...headerProps } />
                  <Switch>
                      <Route component={ Home } exact path="/" />
                      <Route component={ Projects } path="/projects" />
                      <Route component={ Other } path="/other" />
                  </Switch>
              </Router>
          </ThemeProvider>
      </Container>
  );
}

export default App;
