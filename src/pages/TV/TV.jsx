import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import Items from '../../components/Items/Items';

import './TV.scss';
import SearchInput from '../../components/SearchInput/SearchInput';

const TV = ({ tvItems }) => {
	const [filterItems, setFilterItems] = useState(tvItems);
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
		if (text.length - 1 < 1) {
			setFilterItems(tvItems);
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
		<section className="container tv">
			<SearchInput
				placeholder="Search for TV series"
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			<Title
				title={`${
					filterItems.length === tvItems.length
						? 'TV Series'
						: `Found ${filterItems.length} results for '${text}'`
				}`}
			/>
			<Items items={filterItems} />
		</section>
	);
};

export default TV;
