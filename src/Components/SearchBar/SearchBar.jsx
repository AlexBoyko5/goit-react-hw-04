import { useState } from 'react';
const SearchBar = ({ onSubmit }) => {
	const [query, setQuery] = useState('');
	// const { Toast } = useToasts();

	const handleSearch = (event) => {
		event.preventDefault();
		if (query.trim() !== '') {
			onSubmit(query);
		} else {
			Toast('Please enter a search term');
		}
	};
	return (
		<header>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</header>
	);
};

export default SearchBar;
