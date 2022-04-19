import React from 'react';
import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';

import './Recommend.scss';

const Recommend = ({ recommendItems }) => {
	return (
		<section className="recommend container">
			<Title title="Recommended for you" />
			<ItemList items={recommendItems} />
		</section>
	);
};

export default Recommend;
