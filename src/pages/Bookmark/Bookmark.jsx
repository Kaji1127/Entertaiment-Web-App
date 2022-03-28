import React, { useState } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import Title from '../../components/Title/Title';
import Items from '../../components/Items/Items';

import './Bookmark.scss';

const Bookmark = ({ bookmarkedItems }) => {
	const bookmarkedMovie = bookmarkedItems.filter(
		(item) => item.category === 'Movie'
	);

	const bookmarkedTV = bookmarkedItems.filter(
		(item) => item.category === 'TV Series'
	);

	const [filterItems, setFilterItems] = useState(bookmarkedItems);
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
		if (text.length - 1 < 1) {
			setFilterItems(bookmarkedItems);
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
		<section className="container bookmarked">
			<SearchInput
				placeholder="Search for bookmarked shows"
				handleSubmit={handleSubmit}
				handleChange={handleChange}
			/>
			{filterItems.length !== bookmarkedItems.length ? (
				<>
					<Title
						title={`${
							filterItems.length === bookmarkedItems.length
								? ''
								: `Found ${filterItems.length} results for '${text}'`
						}`}
					/>
					<Items items={filterItems} />
				</>
			) : (
				<>
					<div className="bookmarked__movie">
						<Title title="Bookmarked Movies" />
						<Items items={bookmarkedMovie} />
					</div>
					<div className="bookmarked__tv">
						<Title title="Bookmarked TV Series" />
						<Items items={bookmarkedTV} />
					</div>
				</>
			)}
		</section>
	);
};

export default Bookmark;
