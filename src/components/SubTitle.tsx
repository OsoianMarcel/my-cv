import { ReactElement } from 'react';
import styles from './SubTitle.module.scss';

type Props = {
  name: string;
};

export default function SubTitle({ name }: Props): ReactElement {
  return <h4 className={styles.title}>{name}</h4>;
}
