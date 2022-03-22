import React, { useState } from 'react';
import { ReactComponent as IconBookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as IconBookmarkFull } from '../../assets/icon-bookmark-full.svg';
import './Bookamark.scss';

const Bookmark = ({ isBookmarked }) => {
	const [isBookmark, setIsBookmark] = useState(false);
	return (
		<div className="bookmark">
			<span onClick={() => setIsBookmark(!isBookmark)}>
				{isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
			</span>
		</div>
	);
};

export default Bookmark;
