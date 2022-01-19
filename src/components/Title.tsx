import styles from './Title.module.scss';

type Props = {
	name: string
}

export default function Title({name} : Props): JSX.Element {
	return (
		<h3 className={styles.title}>
			{name}
		</h3>
	);
}