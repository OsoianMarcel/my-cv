import { ReactElement } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.name}>
          Osoian
          <br />
          Marcel
        </h1>
        <h2 className={styles.occupation}>Software Engineer</h2>
      </div>
      <div className={styles.right}>
        <ThemeToggle />
        <div className={styles.cv_text}>CV</div>
      </div>
    </header>
  );
}
