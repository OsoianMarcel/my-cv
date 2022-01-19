import type {ReactNode} from 'react';
import Header from './Header';
import styles from './Layout.module.scss';

type Props = {
	children: ReactNode
}

export default function Layout({children} : Props): JSX.Element {
	return (
		<div className={styles.container}>
			<Header/>
			{children}
		</div>
	);
}