import React, { useState } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import Recommend from '../../components/Recommend/Recommend';
import Trend from '../../components/Trend/Trend';

import './Home.scss';
import Items from '../../components/Items/Items';
import Title from '../../components/Title/Title';

const Home = ({ trendItems, recommendItems, allItems }) => {
	const [filterItems, setFilterItems] = useState(allItems);
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
		if (text.length - 1 < 1) {
			setFilterItems(allItems);
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
		<section className="home">
			<SearchInput
				placeholder="Search for movies or TV series"
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			{filterItems.length !== allItems.length ? (
				<div className="container">
					<Title
						title={`${
							filterItems.length === allItems.length
								? ''
								: `Found ${filterItems.length} results for '${text}'`
						}`}
					/>
					<Items items={filterItems} />
				</div>
			) : (
				<>
					<Trend trendItems={trendItems} />
					<Recommend recommendItems={recommendItems} />
				</>
			)}
		</section>
	);
};

export default Home;
