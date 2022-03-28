import React, { useState } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import Items from '../../components/Items/Items';
import Title from '../../components/Title/Title';

import './Movies.scss';

const Movies = ({ movieItems }) => {
	const [filterItems, setFilterItems] = useState(movieItems);
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
		if (text.length - 1 < 1) {
			setFilterItems(movieItems);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newFilterItems = filterItems.filter((el) => {
			return el.title.toLowerCase().includes(text.toLowerCase());
		});
		setFilterItems(newFilterItems);
	};
	return (
		<section className="container movies">
			<SearchInput
				placeholder="Search for movies"
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			<Title
				title={`${
					filterItems.length === movieItems.length
						? 'Movies'
						: `Found ${filterItems.length} results for '${text}'`
				}`}
			/>
			<Items items={filterItems} />
		</section>
	);
};

export default Movies;
