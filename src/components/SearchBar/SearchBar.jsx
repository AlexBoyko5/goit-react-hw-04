import { useState } from 'react';
import toast from 'react-hot-toast';
const SearchBar = ({ onSubmit }) => {
	const [query, setQuery] = useState('');

	const handleSearch = (event) => {
		event.preventDefault();
		if (query.trim() !== '') {
			onSubmit(query);
		} else {
			toast('Please enter a search term');
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
