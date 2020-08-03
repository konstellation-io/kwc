import React, { FunctionComponent, ReactElement } from 'react';

import cx from 'classnames';
import styles from './Left.module.scss';

export type LeftProps = {
  children: ReactElement | ReactElement[];
  className?: string;
};

export const Left: FunctionComponent<LeftProps> = ({ children, className }) => (
  <div className={cx(styles.container, className)}>{children}</div>
);
