import {useState} from 'react';

import styles from './Skills.module.scss';

type Props = {
	skills: string[],
	limit?: number
}

export default function Skill({skills, limit = 10}: Props): JSX.Element {
	const [showAll, setShowAll] = useState(false);

	const skillsToDisplay = showAll ? skills : skills.slice(0, limit);

	const onClick = () => {
		setShowAll(ps => !ps);
	};

	return (
		<div className={styles.container}>
			{skillsToDisplay.map((skill, key) => {
				return <span key={key} className={styles.item}>{skill}</span>;
			})}
			{skills.length > limit && <a
				href="javascript:void(0);"
				onClick={onClick}
				className={styles.link}
			>
				{showAll ? '<less' : 'more>'}
			</a>}
		</div>
	);
}