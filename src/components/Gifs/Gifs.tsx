import styles from './Gifs.module.css';
import { useGifContext } from '../../hooks/useGifContext';

function Gifs() {
	const { allGifs } = useGifContext();

	return (
		<div className={styles.videoContainer}>
			{allGifs.map(({ src }, index) => (
				<video
					key={index}
					className={styles.video}
					autoPlay
					loop
					src={src}></video>
			))}
		</div>
	);
}

export default Gifs;
