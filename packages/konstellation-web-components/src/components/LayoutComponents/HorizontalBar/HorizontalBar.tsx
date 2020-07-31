import React, { FunctionComponent, ReactElement } from 'react';

import cx from 'classnames';
import styles from './HorizontalBar.module.scss';

export type HorizontalBarProps = {
  children: ReactElement | ReactElement[];
  className?: string;
};

export const HorizontalBar: FunctionComponent<HorizontalBarProps> = ({
  children,
  className,
}) => <div className={cx(className, styles.container)}>{children}</div>;
