import React from 'react';
import Card from '../Card/Card';
import Description from '../Description/Description';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import PlayMovie from '../PlayMovie/PlayMovie';

import './ItemList.scss';

const ItemList = ({ items }) => {
	return (
		<ul className="items">
			{items.map((item) => {
				return (
					<li key={item.id} className="item">
						<Card>
							<div className="item__inner">
								<PlayMovie />
								<div className="item__inner-bg"></div>
								<picture>
									<source
										media="(min-width: 64em)"
										srcSet={item.thumbnail.regular.large}
									/>
									<source
										media="(min-width: 48em)"
										srcSet={item.thumbnail.regular.medium}
									/>
									<img
										className="item__inner-thumbnail"
										src={item.thumbnail.regular.small}
										alt={item.title}
									/>
								</picture>
							</div>
						</Card>
						<Description
							title={item.title}
							year={item.year}
							category={item.category}
							rating={item.rating}
						/>
						<BookmarkIcon item={item} />
					</li>
				);
			})}
		</ul>
	);
};

export default ItemList;
