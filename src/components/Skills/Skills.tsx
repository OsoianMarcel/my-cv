import {useState} from 'react';
import useDetectPrint from '../../hooks/useDetectPrint';

import styles from './Skills.module.scss';

type Props = {
	skills: string[],
	limit?: number
}

export default function Skill({skills, limit = 10}: Props): JSX.Element {
	const [showAll, setShowAll] = useState(false);
	const isPrinting = useDetectPrint();

	const skillsToDisplay = showAll || isPrinting ? skills : skills.slice(0, limit);

	const onClick = () => {
		setShowAll(ps => !ps);
	};

	return (
		<div className={styles.container}>
			{skillsToDisplay.map((skill, key) => {
				return <span key={key} className={styles.item}>{skill}</span>;
			})}
			{skills.length > limit && !isPrinting && <button
				onClick={onClick}
				className={styles.btn}
			>
				{showAll ? '<less' : 'more>'}
			</button>}
		</div>
	);
}