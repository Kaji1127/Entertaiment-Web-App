import React, { useContext } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import ItemContext from '../../context/ItemContext';
import SearchItems from '../../components/SearchItems/SearchItems';
import SearchContext from '../../context/SearchContext';

const Movie = () => {
	const { items } = useContext(ItemContext);
	const movies = items.filter((item) => item.category === 'Movie');
	const searchCtx = useContext(SearchContext);

	return (
		<div>
			<Search items={movies} placeholder="Search for movies" />
			{searchCtx.result.length > 0 ? (
				<SearchItems items={searchCtx.result} text={searchCtx.text} />
			) : (
				<section className="container section-wrapper">
					<Title title="Movies" />
					<ItemList items={movies} />
				</section>
			)}
		</div>
	);
};

export default Movie;
