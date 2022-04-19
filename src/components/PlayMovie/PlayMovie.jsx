import React from 'react';
import playIcon from '../../icons/icon-play.svg';

import './PlayMovie.scss';

const PlayMovie = () => {
	return (
		<div className="play-movie">
			<img src={playIcon} alt="Play Icon" />
			<p className="play-movie__text">Play</p>
		</div>
	);
};

export default PlayMovie;
