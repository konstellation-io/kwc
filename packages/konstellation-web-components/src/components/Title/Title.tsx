import React, { FC } from 'react';

import styles from './Title.module.scss';

export type TitleProps = {
  children: (string | JSX.Element)[];
};
export const Title: FC<TitleProps> = ({ children }) => (
  <div className={styles.header}>
    <div className={styles.title}>{children}</div>
  </div>
);
