import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
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
		<header className={styles.header}>
			<form onSubmit={handleSearch} className={styles.form}>
				<input
					className={styles.input}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit" className={styles.button}>
					<FiSearch size="15px" />
				</button>
			</form>
		</header>
	);
};

export default SearchBar;
