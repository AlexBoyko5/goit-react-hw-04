import Modal from 'react-modal';
const ImageModal = ({ image, onClose }) => {
	return (
		<Modal isOpen={true} onRequestClose={onClose}>
			<img src={image.urls.regular} alt={image.alt_description} />
			<button></button>
		</Modal>
	);
};
export default ImageModal;
