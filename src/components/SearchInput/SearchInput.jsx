import IconSearch from '../../assets/icon-search.svg';
import './SearchInput.scss';

const SearchInput = ({ placeholder, handleSubmit, handleChange }) => {
	return (
		<form className="search container" onSubmit={handleSubmit}>
			<div className="search__content">
				<img src={IconSearch} alt="Search Icon" />
				<input
					className="search__input"
					type="text"
					placeholder={placeholder}
					onChange={handleChange}
				/>
			</div>
		</form>
	);
};

export default SearchInput;
