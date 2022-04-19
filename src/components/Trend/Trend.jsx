import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../Title/Title';
import 'swiper/css';
import './Trend.scss';
import Card from '../Card/Card';
import Description from '../Description/Description';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import PlayMovie from '../PlayMovie/PlayMovie';

const Trend = ({ trendItems }) => {
	return (
		<section className="trend">
			<Title title="Trending" />
			<div className="trend__list">
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={16}
					breakpoints={{
						768: {
							spaceBetween: 40,
						},
					}}
				>
					{trendItems.map((item) => {
						return (
							<SwiperSlide key={item.id}>
								<Card>
									<article className="trend__item">
										<div className="trend__bg"></div>
										<picture>
											<source
												media="(min-width:48em)"
												srcSet={item.thumbnail.trending.large}
											/>
											<img
												className="trend__image"
												src={item.thumbnail.trending.small}
												alt="trend item"
											/>
										</picture>
										<PlayMovie />
									</article>
								</Card>
								<Description
									title={item.title}
									year={item.year}
									category={item.category}
									rating={item.rating}
								/>
								<BookmarkIcon item={item} items={trendItems} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Trend;
