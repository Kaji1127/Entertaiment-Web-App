import React from 'react';
import Items from '../Items/Items';
import Title from '../Title/Title';
import './Recommend.scss';

const Recommend = ({ recommendItems, onBookmark }) => {
	return (
		<section className="recommend container">
			<Title title="Recommend for you" />
			<Items items={recommendItems} />
		</section>
	);
};

export default Recommend;
