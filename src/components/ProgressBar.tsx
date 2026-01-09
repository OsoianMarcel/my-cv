import { ReactElement } from 'react';
import styles from './ProgressBar.module.scss';

type Props = {
  max?: number | string;
  val: number | string;
  label?: string;
};

export default function ProgressBar({
  max = 100,
  val,
  label
}: Props): ReactElement {
  if (typeof max !== 'number') {
    max = parseInt(max, 10);
  }

  if (typeof val !== 'number') {
    val = parseInt(val, 10);
  }

  if (isNaN(val) || isNaN(max)) {
    console.error('ProgressBar: "val" or "max" property is NaN', { val, max });
    return <div className={styles.bar} />;
  }

  const percentage = (val * 100) / max;
  const width = `${percentage}%`;

  return (
    <div
      className={styles.bar}
      role="progressbar"
      aria-valuenow={val}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label || `Progress: ${Math.round(percentage)}%`}
    >
      <div className={styles.progress_wrapper}>
        <div className={styles.progress} style={{ width }}>
          &nbsp;
        </div>
      </div>
    </div>
  );
}
