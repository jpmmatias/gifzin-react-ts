import styles from './Gifs.module.css';
import { GifsProps } from './Gifs.types';
import { useKey } from '../../hooks/useKey';

function Gifs({ allGifs, fetchGifs }: GifsProps) {
	useKey('Enter', fetchGifs);

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
