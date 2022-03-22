import React from 'react';
import Recommend from '../../components/Recommend/Recommend';
import Trend from '../../components/Trend/Trend';
import { data } from '../../data';

import './Home.scss';

const Home = () => {
	const trendItems = data.filter((item) => item.isTrending);
	const recommendItems = data.filter((item) => !item.isTrending);
	console.log(trendItems);
	return (
		<section className="home">
			<Trend trendItems={trendItems} />
			<Recommend recommendItems={recommendItems} />
		</section>
	);
};

export default Home;
