import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import './Trend.scss';
import Title from '../Title/Title';

import { ReactComponent as IconCategoryMovie } from '../../assets/icon-category-movie.svg';
import { ReactComponent as IconCategoryTV } from '../../assets/icon-category-tv.svg';

import Bookmark from '../Bookmark/Bookmark';

const Trend = ({ trendItems }) => {
	return (
		<section className="trend">
			<Title title="Trending" />
			<Swiper
				modules={[Scrollbar, Autoplay]}
				spaceBetween={16}
				slidesPerView={'auto'}
			>
				{trendItems.map((item) => {
					const { small } = item.thumbnail.trending;
					return (
						<SwiperSlide key={item.id}>
							<div className="trend__item">
								<div className="bg"></div>
								<img src={small} alt={item.title} className="trend__image" />
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
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Trend;
