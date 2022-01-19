import type {ReactNode} from 'react';

type Props = {
	children: ReactNode,
	onSSR?: ReactNode
}

export default function NoSSR({children, onSSR = '\u00A0'} : Props): JSX.Element {
	return (
		<>
			{typeof window !== 'undefined' ? children : onSSR}
		</>
	);
}