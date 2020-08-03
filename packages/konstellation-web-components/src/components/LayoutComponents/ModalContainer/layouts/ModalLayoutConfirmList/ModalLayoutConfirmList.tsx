import React, { FC, Fragment } from 'react';

import styles from './ModalLayoutConfirmList.module.scss';

export type ModalLayoutConfirmListProps = {
  children: JSX.Element[];
  message: string;
  confirmMessage?: string;
};
export const ModalLayoutConfirmList: FC<ModalLayoutConfirmListProps> = ({
  children,
  message,
  confirmMessage,
}) => (
  <Fragment>
    <div className={styles.message}>{message}</div>
    <div className={styles.list}>{children}</div>
    {confirmMessage && (
      <div className={styles.confirmMessage}>{confirmMessage}</div>
    )}
  </Fragment>
);
