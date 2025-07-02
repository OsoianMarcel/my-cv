import { ReactElement } from 'react';
import styles from './Title.module.scss';

type Props = {
  name: string;
};

export default function Title({ name }: Props): ReactElement {
  return <h3 className={styles.title}>{name}</h3>;
}
