import React from 'react';
import IconSearch from '../../icons/icon-search.svg';

import './SearchInput.scss';

const SearchInput = ({ placeholder, handleChange }) => {
	return (
		<div className="search">
			<img className="search__icon" src={IconSearch} alt="Search Icon" />
			<input
				className="search__input"
				type="text"
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};

export default SearchInput;
