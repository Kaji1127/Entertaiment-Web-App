import React from 'react';
import IconSearch from '../../assets/icon-search.svg';
import './SearchInput.scss';

const SearchInput = () => {
	return (
		<div className="search container">
			<div className="search__content">
				<img src={IconSearch} alt="Search Icon" />
				<input
					className="search__input"
					type="text"
					placeholder="Search for movies or TV series"
				/>
			</div>
		</div>
	);
};

export default SearchInput;
