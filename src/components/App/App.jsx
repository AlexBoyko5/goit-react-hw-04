import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';
//Нормализ стилей
import './App.css';
import 'modern-normalize';

function App() {
	const [images, setImages] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [page, setPage] = useState(1);
	const [selectedImage, setSelectedImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [showLoadMore, setShowLoadMore] = useState(false);

	const fetchImages = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(
				`https://api.unsplash.com/search/photos?query=${searchQuery}&page=${page}&client_id=E9gUoXzHrMXiPVduDPHOe50tmZm2vFUStYbYeL0wKhs`
			);
			setImages((prevImages) => [...prevImages, ...response.data.results]);
			setPage((prevPages) => prevPages + 1);
			setShowLoadMore(response.data.results.length > 0);
		} catch (error) {
			console.error('Error fetching images:', error);
			setError('Error fetching images');
		}
		setIsLoading(false);
	};
	const handleImageSelect = (image) => {
		setSelectedImage(image);
	};
	const handleCloseModal = () => {
		setSelectedImage(null);
	};
	//====== use effect ====
	useEffect(() => {
		if (searchQuery) {
			fetchImages();
		}
	}, [searchQuery, page]);
	//======================
	const handleSearchSubmit = (query) => {
		if (query.trim() !== '') {
			setImages([]);
			setSearchQuery(query);
			setPage(1);
			// fetchImages(query);
		} else {
			toast('Please enter a search term');
		}
	};
	return (
		<div className="App">
			<SearchBar onSubmit={handleSearchSubmit} />
			<ImageGallery images={images} onSelect={handleImageSelect} />
			{selectedImage && (
				<ImageModal image={selectedImage} onClose={handleCloseModal} />
			)}
			{isLoading && <Loader />}
			{error && <ErrorMessage message={error} />}
			{showLoadMore && !isLoading && <LoadMoreBtn onClick={fetchImages} />}
		</div>
	);
}

export default App;
