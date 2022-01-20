import type {ReactNode} from 'react';

import styles from './EmploymentItem.module.scss';

type Props = {
	position: string,
	company: string,
	periodFrom: string,
	periodTo: string,
	children?: ReactNode
}

export default function EmploymentItem({position, company, periodFrom, periodTo, children} : Props): JSX.Element {
	return (
		<div className={styles.container}>
			<div className={styles.position_container}>
				<div className={styles.position_name}>
					{position}
				</div>
				<div className={styles.position_company}>
					{company}
				</div>
			</div>
			<div className={styles.position_period}>
				{periodFrom} — {periodTo}
			</div>
			{children}
		</div>
	);
}