import React, { useContext } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import Search from '../../components/Search/Search';
import Title from '../../components/Title/Title';
import ItemContext from '../../context/ItemContext';
import SearchItems from '../../components/SearchItems/SearchItems';
import SearchContext from '../../context/SearchContext';
import { motion } from 'framer-motion';

const TV = () => {
	const { items } = useContext(ItemContext);
	const tvSeries = items.filter((item) => item.category !== 'Movie');
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
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Search placeholder="Search for TV series" items={tvSeries} />
			{searchCtx.result.length > 0 ? (
				<SearchItems items={searchCtx.result} text={searchCtx.text} />
			) : (
				<section className="container section-wrapper">
					<Title title="TV Series" />
					<ItemList items={tvSeries} />
				</section>
			)}
		</motion.div>
	);
};

export default TV;
