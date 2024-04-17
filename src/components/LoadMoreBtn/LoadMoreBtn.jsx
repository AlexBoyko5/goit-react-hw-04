import styles from './LoadBtnTemp.module.css';
const LoadMoreBtn = ({ onClick }) => {
	return (
		<button onClick={onClick} className={styles.LoadMoreBtn}>
			LoadMore
		</button>
	);
};
export default LoadMoreBtn;
