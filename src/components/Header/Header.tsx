import styles from './Header.module.css';
import closeBtnSvg from '../../images/close-icon.svg';
import { useGifContext } from '../../hooks/useGifContext';

function Header() {
	const { gifShowing, reset } = useGifContext();

	if (gifShowing) {
		return (
			<button className={styles.button} onClick={reset}>
				<img src={closeBtnSvg} alt='Botão para fechar, circulo com X no meio' />
			</button>
		);
	}
	return (
		<header className={styles.header}>
			<h1 className={styles.h1}>Gifzin</h1>
		</header>
	);
}

export default Header;
