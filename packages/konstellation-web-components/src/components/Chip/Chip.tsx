import React, { MouseEvent } from 'react';

import IconClose from '@material-ui/icons/Close';
import cx from 'classnames';
import styles from './Chip.module.scss';

export type ChipProps = {
  label: string;
  title?: string;
  round?: boolean;
  className?: string;
  onClose?: (event: MouseEvent<HTMLDivElement>) => void;
};
export function Chip({ label, title, onClose, round = false, className }: ChipProps) {
  return (
    <div className={cx(styles.chip, className, { [styles.round]: round })} title={title || label}>
      <div className={styles.label}>{label}</div>
      {onClose !== undefined && (
        <div className={styles.icon} onClick={onClose}>
          <IconClose className="icon-small" />
        </div>
      )}
    </div>
  );
}
