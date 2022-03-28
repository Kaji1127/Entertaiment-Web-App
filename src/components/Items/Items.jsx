import React from 'react';
import { ReactComponent as IconCategoryMovie } from '../../assets/icon-category-movie.svg';
import { ReactComponent as IconCategoryTV } from '../../assets/icon-category-tv.svg';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import './Item.scss';

const Items = ({ items }) => {
	return (
		<div className="items__content">
			{items.map((item) => {
				return (
					<article key={item.id} className="items__item">
						<img src={item.thumbnail.regular.small} alt={item.title} />
						<div className="items__detail flex">
							<div className="items__detail-inner flex">
								<span>{item.year}</span>
								<span>&bull;</span>
								<div className="items__icons flex">
									{item.category === 'Movie' ? (
										<IconCategoryMovie />
									) : (
										<IconCategoryTV />
									)}
									<span>{item.category}</span>
								</div>
								<span>&bull;</span>
								<span>{item.rating}</span>
							</div>
							<h4 className="items__item-title">{item.title}</h4>
						</div>
						<BookmarkIcon item={item} />
					</article>
				);
			})}
		</div>
	);
};

export default Items;
