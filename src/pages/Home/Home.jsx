import React, { useContext } from 'react';
import Recommend from '../../components/Recommend/Recommend';
import Trend from '../../components/Trend/Trend';
import ItemContext from '../../context/ItemContext';
import Search from '../../components/Search/Search';
import SearchItems from '../../components/SearchItems/SearchItems';
import SearchContext from '../../context/SearchContext';

const Home = () => {
	const { items } = useContext(ItemContext);
	const trendItems = items.filter((item) => item.isTrending === true);
	const recommendItems = items.filter((item) => item.isTrending === false);

	const searchCtx = useContext(SearchContext);

	return (
		<div className="home section-wrapper">
			<Search items={items} placeholder="Search for movies or TV series" />
			{searchCtx.result.length > 0 ? (
				<SearchItems items={searchCtx.result} text={searchCtx.text} />
			) : (
				<>
					<Trend trendItems={trendItems} />
					<Recommend recommendItems={recommendItems} />
				</>
			)}
		</div>
	);
};
export default Home;
