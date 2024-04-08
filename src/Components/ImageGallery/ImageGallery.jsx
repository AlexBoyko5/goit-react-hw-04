import ImageCard from './ImageCard/ImageCard';
const ImageGallery = ({ images, onSelect }) => {
	return (
		<ul>
			{images.map((image) => (
				<li key={image.id}>
					<ImageCard image={image} onSelect={onSelect} />
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
