import React, { useContext } from 'react';
import Recommend from '../../components/Recommend/Recommend';
import Trend from '../../components/Trend/Trend';
import ItemContext from '../../context/ItemContext';
import Search from '../../components/Search/Search';
import SearchItems from '../../components/SearchItems/SearchItems';
import SearchContext from '../../context/SearchContext';
import { motion } from 'framer-motion';

const Home = () => {
	const { items } = useContext(ItemContext);
	const trendItems = items.filter((item) => item.isTrending === true);
	const recommendItems = items.filter((item) => item.isTrending === false);

	const searchCtx = useContext(SearchContext);

	const containerVariants = {
		hidden: {
			x: -60,
			opacity: 0,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, delay: 0.2 },
		},
		exit: {
			x: -60,
			opacity: 0,
			transition: { type: 'tween' },
		},
	};

	return (
		<motion.div
			className="home section-wrapper"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Search items={items} placeholder="Search for movies or TV series" />
			{searchCtx.result.length > 0 ? (
				<SearchItems items={searchCtx.result} text={searchCtx.text} />
			) : (
				<>
					<Trend trendItems={trendItems} />
					<Recommend recommendItems={recommendItems} />
				</>
			)}
		</motion.div>
	);
};
export default Home;
