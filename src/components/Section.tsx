import type { ReactElement, ReactNode } from 'react';

import Title from './Title';

import styles from './Section.module.scss';

type Props = {
  children: ReactNode;
  title: string;
};

export default function Section({ children, title }: Props): ReactElement {
  return (
    <section className={styles.section}>
      <Title name={title} />

      {children}
    </section>
  );
}
