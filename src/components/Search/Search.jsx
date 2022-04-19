import React, { useContext } from 'react';
import SearchContext from '../../context/SearchContext';
import SearchInput from '../SearchInput/SearchInput';
// import SearchItems from '../SearchItems/SearchItems';

const Search = ({ items, placeholder }) => {
	const searchCtx = useContext(SearchContext);

	return (
		<form
			className="container"
			onSubmit={(e) => searchCtx.handleSubmit(e, items)}
		>
			<SearchInput
				placeholder={placeholder}
				handleChange={searchCtx.handleChange}
				text={searchCtx.text}
			/>
		</form>
	);
};

export default Search;
