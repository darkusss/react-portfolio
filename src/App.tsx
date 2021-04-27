import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from './themes/themes';
import { Container } from './app.style';
import { GlobalStyles } from './utils/global.style';
import Routes from './Routes';
import Header from './components/header/Header';

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
				<GlobalStyles/>
				<Router basename="/react-portfolio">
					<Header {...headerProps} />
					<Routes/>
				</Router>
			</Container>
		</ThemeProvider>
	);
}

export default App;
