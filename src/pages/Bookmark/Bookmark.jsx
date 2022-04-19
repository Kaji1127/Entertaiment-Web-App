import React, { useContext } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import ItemContext from '../../context/ItemContext';
import SearchItems from '../../components/SearchItems/SearchItems';
import SearchContext from '../../context/SearchContext';

import './Bookmark.scss';

const Bookmark = () => {
	const { items } = useContext(ItemContext);
	const searchCtx = useContext(SearchContext);

	const bookmarkItems = items.filter((el) => el.isBookmarked === true);

	const bookmarkedMovies = items.filter(
		(item) => item.isBookmarked === true && item.category === 'Movie'
	);

	const bookmarkedTV = items.filter(
		(item) => item.isBookmarked === true && item.category !== 'Movie'
	);

	return (
		<div className="bookmark">
			<Search items={bookmarkItems} placeholder="Search for bookmarked shows" />
			{searchCtx.result.length > 0 ? (
				<SearchItems items={searchCtx.result} text={searchCtx.text} />
			) : (
				<div className="section-wrapper container">
					<section className="bookmark-movies">
						<Title title="Bookmarked Movies" />
						<ItemList items={bookmarkedMovies} />
					</section>
					<section className="bookmark-tv">
						<Title title="Bookmarked TV Series" />
						<ItemList items={bookmarkedTV} />
					</section>
				</div>
			)}
		</div>
	);
};

export default Bookmark;
