
import React, { useContext } from 'react';
import Sobremim from './page/Sobremim';
import Projetos from './page/Projetos';
import  GlobalStyle  from './styles/globals';
import { ThemeProvider } from 'styled-components';
import portContext from './context/portContext';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
	const { color } = useContext(portContext); 
	return (
		<> 

			<ThemeProvider theme={ color  }  >
				<Switch>
					<Route exact path="/"  component={ Sobremim }/>
					<Route exact path="/projetos" component={ Projetos } />
				</Switch>
				<GlobalStyle/>
			</ThemeProvider>

		</> );
}

export default App;
