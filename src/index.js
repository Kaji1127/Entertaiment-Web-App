import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BookmarkContextProvider } from './context/BookmarkContext';

ReactDOM.render(
	<React.StrictMode>
		<BookmarkContextProvider>
			<App />
		</BookmarkContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
