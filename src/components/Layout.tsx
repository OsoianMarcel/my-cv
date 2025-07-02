import type { ReactElement, ReactNode } from 'react';
import Header from './Header';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
