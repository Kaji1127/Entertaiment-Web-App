import React, { useContext } from 'react';
import ItemContext from '../../context/ItemContext';
import { ReactComponent as BookmarkEmpty } from '../../icons/icon-bookmark-empty.svg';
import { ReactComponent as BookmarkFull } from '../../icons/icon-bookmark-full.svg';
import './BookmarkIcon.scss';

const BookmarkIcon = ({ item }) => {
	const { bookmarkHandler } = useContext(ItemContext);
	return (
		<div className="bookmark-icon">
			<span
				className="bookmark-icon__image"
				onClick={() => bookmarkHandler(item)}
			>
				{item.isBookmarked ? (
					<BookmarkFull className="full" />
				) : (
					<BookmarkEmpty className="empty" />
				)}
			</span>
		</div>
	);
};

export default BookmarkIcon;
