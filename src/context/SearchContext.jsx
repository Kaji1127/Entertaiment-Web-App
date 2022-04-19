import React, { useState } from 'react';

const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
	const [result, setResult] = useState([]);
	const [text, setText] = useState('');

	const handleSubmit = (e, items) => {
		e.preventDefault();
		setResult(
			items.filter((el) => el.title.toLowerCase().includes(text.toLowerCase()))
		);
		console.log(result);

		if (text.length === 0) {
			return false;
		}
	};

	const handleChange = (e) => {
		setText(e.target.value);
		if (text.length - 1 < 1) {
			setResult([]);
		}
	};
	return (
		<SearchContext.Provider
			value={{ result, handleSubmit, handleChange, text, setText, setResult }}
		>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
