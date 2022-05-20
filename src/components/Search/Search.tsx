import styles from './Search.module.css';
import { SearchProps } from './Search.types';

function Search({ textSearch, setTextSearch, fetchGifs }: SearchProps) {
	function handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key !== 'Enter') return;
		fetchGifs();
	}

	return (
		<input
			onKeyDown={(e) => {
				handleSubmit(e);
			}}
			value={textSearch}
			onChange={({ target: { value } }) => setTextSearch(value)}
			className={styles.input}
			placeholder='Nome do Gif'
			type='text'
		/>
	);
}

export default Search;
