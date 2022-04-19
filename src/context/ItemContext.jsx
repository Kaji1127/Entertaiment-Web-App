import React, { useState } from 'react';
import data from '../data.json';

const ItemContext = React.createContext();

export const ItemContextProvider = ({ children }) => {
	const [items, setItems] = useState(data);
	const bookmarkHandler = (item) => {
		const bookmark = items.map((el) => {
			if (item.id === el.id) {
				return { ...el, isBookmarked: !el.isBookmarked };
			}
			return el;
		});
		setItems(bookmark);
	};

	return (
		<ItemContext.Provider value={{ items, setItems, bookmarkHandler }}>
			{children}
		</ItemContext.Provider>
	);
};

export default ItemContext;
