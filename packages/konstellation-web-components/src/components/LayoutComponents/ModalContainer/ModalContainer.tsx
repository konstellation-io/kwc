import { BUTTON_THEMES, Button } from '../../Button/Button';
import React, { Fragment, FunctionComponent, MouseEvent } from 'react';

import { HorizontalBar } from '../HorizontalBar/HorizontalBar';
import cx from 'classnames';
import styles from './ModalContainer.module.scss';

export type ModalContainerProps = {
  title: string;
  actionButtonLabel?: string;
  to?: string;
  /** Shows a shield behind the modal */
  blocking?: boolean;
  /** Action button will be a warning button */
  warning?: boolean;
  onAccept?: (e?: MouseEvent<HTMLDivElement>) => void;
  onCancel?: (e?: MouseEvent<HTMLDivElement>) => void;
  className?: string;
  autofocusOnAccept?: boolean;
  /** Forces the used to wait this amount of seconds before clicking on the action button */
  confirmationTimer?: number;
};

export const ModalContainer: FunctionComponent<ModalContainerProps> = ({
  children,
  title,
  actionButtonLabel = 'ACCEPT',
  to = '',
  blocking = false,
  warning = false,
  onAccept = function () {},
  onCancel = function () {},
  className = '',
  autofocusOnAccept = false,
  confirmationTimer,
}) => {
  return (
    <Fragment>
      {blocking && <div className={styles.bg} />}
      <div className={cx(className, styles.container, 'modal', {})}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <HorizontalBar>
            <Button
              primary
              label={actionButtonLabel}
              to={to}
              onClick={onAccept}
              height={30}
              tabIndex={0}
              autofocus={autofocusOnAccept}
              theme={warning ? BUTTON_THEMES.WARN : BUTTON_THEMES.DEFAULT}
              timeToEnable={confirmationTimer}
            />
            <Button
              label="CANCEL"
              onClick={onCancel}
              height={30}
              tabIndex={0}
            />
          </HorizontalBar>
        </div>
      </div>
    </Fragment>
  );
};
