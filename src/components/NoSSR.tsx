import type {ReactNode} from 'react';
import {useState, useEffect} from 'react';

type Props = {
	children: ReactNode,
	onSSR?: ReactNode
}

export default function NoSSR({children, onSSR = '\u00A0'} : Props): JSX.Element {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient ? children : onSSR}
		</>
	);
}