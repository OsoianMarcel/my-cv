import { ReactElement } from 'react';
import styles from './ProgressBar.module.scss';

type Props = {
  max?: number | string;
  val: number | string;
};

export default function ProgressBar({ max = 100, val }: Props): ReactElement {
  if (typeof max !== 'number') {
    max = parseInt(max, 10);
  }

  if (typeof val !== 'number') {
    val = parseInt(val, 10);
  }

  if (isNaN(val) || isNaN(max)) {
    throw new Error('"val" or "max" property is NaN');
  }

  const width = `${(val * 100) / max}%`;

  return (
    <div className={styles.bar}>
      <div className={styles.progress_wrapper}>
        <div className={styles.progress} style={{ width }}>
          &nbsp;
        </div>
      </div>
    </div>
  );
}
