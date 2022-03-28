import React, { useContext, useState } from 'react';
import { ReactComponent as IconBookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { ReactComponent as IconBookmarkFull } from '../../assets/icon-bookmark-full.svg';
import BookmarkContext from '../../context/BookmarkContext';
import './BookmarkIcon.scss';

const BookmarkIcon = ({ item }) => {
	const ctx = useContext(BookmarkContext);

	const [showItem, setShowItem] = useState(ctx.items);

	const bookmark = (book) => {
		const bookmarkList = showItem.map((item) => {
			if (item.id === book.id) {
				return { ...item, isBookmarked: !item.isBookmarked };
			}
			return item;
		});
		const bookmarked = (test) => {
			if (ctx.bookmarkItem.includes(test)) {
				const filterBookmark = ctx.bookmarkItem.filter(
					(item) => item.id !== test.id
				);
				return ctx.setBookmarkItem(filterBookmark);
			} else {
				return ctx.setBookmarkItem([...ctx.bookmarkItem, test]);
			}
		};
		setShowItem(bookmarkList);
		bookmarked(book);
	};
	return (
		<div className="bookmark" onClick={() => bookmark(item)}>
			<span>
				{ctx.bookmarkItem.includes(item) ? (
					<IconBookmarkFull />
				) : (
					<IconBookmarkEmpty />
				)}
			</span>
		</div>
	);
};

export default BookmarkIcon;
