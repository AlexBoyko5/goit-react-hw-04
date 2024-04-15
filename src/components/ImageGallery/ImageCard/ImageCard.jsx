import styles from './ImageCard.module.css';
const ImageCard = ({ image, onSelect }) => {
	return (
		<div onClick={() => onSelect(image)} className={styles.imageContainer}>
			<img src={image.urls.small} alt={image.alt_description} />
		</div>
	);
};

export default ImageCard;
