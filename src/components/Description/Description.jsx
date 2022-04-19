import React from 'react';
import IconMovie from '../../icons/icon-category-movie.svg';
import IconTV from '../../icons/icon-category-tv.svg';
import './Description.scss';

const Description = ({ title, year, category, rating }) => {
	return (
		<div className="description">
			<div className="description__text">
				<p>{year}</p>
				<span>•</span>
				<div className="description__category">
					<img src={category === 'Movie' ? IconMovie : IconTV} alt={category} />
					<p>{category}</p>
				</div>
				<span>•</span>
				<p>{rating}</p>
			</div>
			<h2 className="description__title">{title}</h2>
		</div>
	);
};

export default Description;
