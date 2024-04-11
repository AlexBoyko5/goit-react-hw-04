const ImageCard = ({ image, onSelect }) => {
	return (
		<div onClick={() => onSelect(image)}>
			<img src={image.urls.small} alt={image.alt_description} />
		</div>
	);
};

export default ImageCard;
