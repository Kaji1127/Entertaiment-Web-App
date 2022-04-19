import React, { useContext } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import ItemContext from '../../context/ItemContext';
import SearchItems from '../../components/SearchItems/SearchItems';
import SearchContext from '../../context/SearchContext';

const TV = () => {
	const { items } = useContext(ItemContext);
	const tvSeries = items.filter((item) => item.category !== 'Movie');
	const searchCtx = useContext(SearchContext);

	return (
		<div>
			<Search placeholder="Search for TV series" items={tvSeries} />
			{searchCtx.result.length > 0 ? (
				<SearchItems items={searchCtx.result} text={searchCtx.text} />
			) : (
				<section className="container section-wrapper">
					<Title title="TV Series" />
					<ItemList items={tvSeries} />
				</section>
			)}
		</div>
	);
};

export default TV;
