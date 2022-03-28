import { createContext, useState } from 'react';
import { data } from '../data';

const BookmarkContext = createContext();

export const BookmarkContextProvider = (props) => {
	const bookmarkedItems = data.filter((item) => item.isBookmarked);
	const [bookmarkItem, setBookmarkItem] = useState(bookmarkedItems);

	const allItem = data;

	const [items, setItems] = useState(allItem);

	return (
		<BookmarkContext.Provider
			value={{ bookmarkItem, setBookmarkItem, items, setItems, allItem }}
		>
			{props.children}
		</BookmarkContext.Provider>
	);
};

export default BookmarkContext;
