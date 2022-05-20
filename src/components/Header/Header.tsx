import styles from './Header.module.css';
import { HeaderProps } from './Header.types';
import closeBtnSvg from '../../images/close-icon.svg';

function Header({ gifShowing, reset }: HeaderProps) {
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
