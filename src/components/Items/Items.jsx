import React from 'react';
import { ReactComponent as IconCategoryMovie } from '../../assets/icon-category-movie.svg';
import { ReactComponent as IconCategoryTV } from '../../assets/icon-category-tv.svg';
import Bookmark from '../Bookmark/Bookmark';
import './Item.scss';

const Items = ({ item, smallImage }) => {
	return (
		<div className="item trend__item">
			<div className="bg"></div>
			<img src={smallImage} alt={item.title} className="trend__image" />
			<div className="trend__description">
				<div className="trend__detail flex">
					<span>{item.year}</span>
					<span>&bull;</span>
					<div className="trend__icons flex">
						{item.category === 'Movie' ? (
							<IconCategoryMovie />
						) : (
							<IconCategoryTV />
						)}
						<span>{item.category}</span>
					</div>
					<span>&bull;</span>
					<span>PG</span>
				</div>
				<h4 className="trend__item-title">{item.title}</h4>
			</div>
			<Bookmark />
		</div>
	);
};

export default Items;
