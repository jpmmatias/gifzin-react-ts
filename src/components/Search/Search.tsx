import styles from './Search.module.css';
import { useGifContext } from '../../hooks/useGifContext';

function Search() {
	const { setTextSearch, textSearch } = useGifContext();

	return (
		<input
			value={textSearch}
			onChange={({ target: { value } }) => setTextSearch(value)}
			className={styles.input}
			placeholder='Nome do Gif'
			type='text'
		/>
	);
}

export default Search;
