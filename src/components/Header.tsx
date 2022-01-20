import styles from './Header.module.scss';

export default function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<h1 className={styles.name}>
					Osoian<br/>
					Marcel
				</h1>
				<h2 className={styles.occupation}>Fullstack Web Developer</h2>
			</div>
			<div className={styles.right}>
				CV
			</div>
		</header>
	);
}