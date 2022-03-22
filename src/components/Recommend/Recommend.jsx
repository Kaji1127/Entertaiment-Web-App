import React from 'react';
import { ReactComponent as IconCategoryMovie } from '../../assets/icon-category-movie.svg';
import { ReactComponent as IconCategoryTV } from '../../assets/icon-category-tv.svg';
import Bookmark from '../Bookmark/Bookmark';
import './Recommend.scss';

const Recommend = ({ recommendItems }) => {
	return (
		<section className="recommend container">
			<h2>Recommend for you</h2>
			<div className="recommend__content">
				{recommendItems.map((item) => {
					return (
						<article key={item.id} className="recommend__item">
							<img src={item.thumbnail.regular.small} alt={item.title} />
							<div className="recommend__detail flex">
								<div className="recommend__detail-inner flex">
									<span>{item.year}</span>
									<span>&bull;</span>
									<div className="recommend__icons flex">
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
								<h4 className="recommend__item-title">{item.title}</h4>
							</div>
							<Bookmark isBookmarked={item.isBookmarked} />
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Recommend;
