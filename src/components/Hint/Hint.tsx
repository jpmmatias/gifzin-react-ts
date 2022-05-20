import { validTextSearch } from '../../utils/validTextSearch';
import styles from './Hint.module.css';
import { HintProps } from './Hint.types';

function Hint({ gifShowing, textSearch }: HintProps) {
	if (gifShowing) {
		return (
			<p className={styles.p}>
				<p>Clique enter para pesquisar novamente {textSearch}</p>
			</p>
		);
	}

	if (textSearch === '') {
		return (
			<p className={styles.p}>
				Pesquise o gif para nos acharmos o melhor do universo para vc{' '}
			</p>
		);
	}

	return validTextSearch(textSearch) && textSearch !== '' ? (
		<p className={styles.p}>Clique enter para pesquisar {textSearch}</p>
	) : (
		<p className={styles.p}>
			Por favor pesquise um gif com mais de 2 caracteres
		</p>
	);
}

export default Hint;
