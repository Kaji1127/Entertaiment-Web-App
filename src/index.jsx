import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ItemContextProvider } from './context/ItemContext';
import { SearchProvider } from './context/SearchContext';

import './index.scss';

ReactDOM.render(
	<ItemContextProvider>
		<SearchProvider>
			<App />
		</SearchProvider>
	</ItemContextProvider>,
	document.getElementById('root')
);
