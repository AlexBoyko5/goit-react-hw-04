import ImageCard from './ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onSelect }) => {
	return (
		<ul className={styles.list}>
			{images.map((image) => (
				<li key={image.id}>
					<ImageCard image={image} onSelect={onSelect} />
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
