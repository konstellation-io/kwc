import React, { FC } from 'react';

import cx from 'classnames';
import styles from './ModalLayoutInfo.module.scss';

export type ModalLayoutInfoProps = {
  children: string | JSX.Element;
  className?: string;
};
export const ModalLayoutInfo: FC<ModalLayoutInfoProps> = ({
  children,
  className = '',
}) => (
  <div className={cx(className, styles.message)} data-testid="modal-message">
    {children}
  </div>
);
