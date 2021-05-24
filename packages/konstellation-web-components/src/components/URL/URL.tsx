import React, { FC } from 'react';

import cx from 'classnames';
import styles from './URL.module.scss';

export type URLProps = {
  children: string;
  className?: string;
};
export const URL: FC<URLProps> = ({ children, className }) => (
  <div
    className={cx(styles.url, className)}
    onClick={() => window.open(children)}
  >
    {children}
  </div>
);
