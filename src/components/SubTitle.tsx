import styles from './SubTitle.module.scss';

type Props = {
	name: string
}

export default function Title({name} : Props): JSX.Element {
	return (
		<h4 className={styles.title}>
			{name}
		</h4>
	);
}