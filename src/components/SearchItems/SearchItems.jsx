import React from 'react';
import Title from '../Title/Title';
import ItemList from '../ItemList/ItemList';

const SearchItems = ({ items, text }) => {
	return (
		<div className="container">
			<div>
				<Title title={`Found ${items.length} results for '${text}'`} />
				<ItemList items={items} />
			</div>
		</div>
	);
};

export default SearchItems;
