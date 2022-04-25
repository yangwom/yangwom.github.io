import portContext from './portContext';
import propTypes from 'prop-types';
import React from 'react';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import usePersistStore from '../hook/usepersistStore';

function PortProvider({ children }) {
	const [ color, setColor ] = usePersistStore('theme', light);
	const darkMode = () => {
		if(color.title === 'light' ) {
			setColor(dark);
		} else {
			setColor(light);
		}
	};
	const value = {
		darkMode,
		color
	};
  
	return (
		<portContext.Provider value={ value } >
			{children}
		</portContext.Provider>
	);
}

PortProvider.propTypes = {
	children: propTypes.node,
}.isRequired;

export default PortProvider;