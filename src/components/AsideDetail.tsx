import type {ReactNode} from 'react';

import SubTitle from './SubTitle';

import styles from './AsideDetail.module.scss';

type Props = {
	title: string,
	children: ReactNode
}

export default function AsideDetails({title, children} : Props): JSX.Element {
	return (
		<div className={styles.aside_detail}>
			<SubTitle name={title}/>
			{children}
		</div>
	);
}