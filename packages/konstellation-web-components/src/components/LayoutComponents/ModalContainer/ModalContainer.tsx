import { BUTTON_THEMES, Button } from '../../Button/Button';
import React, { Fragment, FunctionComponent, MouseEvent } from 'react';

import { HorizontalBar } from '../HorizontalBar/HorizontalBar';
import cx from 'classnames';
import styles from './ModalContainer.module.scss';

export type ModalContainerProps = {
  title: string;
  subtitle?: string;
  actionButtonLabel?: string;
  to?: string;
  /** Shows a shield behind the modal */
  blocking?: boolean;
  warning?: boolean;
  error?: boolean;
  onAccept?: (e?: MouseEvent<HTMLDivElement>) => void;
  onCancel?: (e?: MouseEvent<HTMLDivElement>) => void;
  className?: string;
  autofocusOnAccept?: boolean;
  /** Forces the used to wait this amount of seconds before clicking on the action button */
  confirmationTimer?: number;
};

type GetButtonThemePartams = {
  warning: boolean;
  error: boolean;
};
function getButtonTheme({ warning, error }: GetButtonThemePartams) {
  switch (true) {
    case error:
      return BUTTON_THEMES.ERROR;
    case warning:
      return BUTTON_THEMES.WARN;
    default:
      return BUTTON_THEMES.DEFAULT;
  }
}

export const ModalContainer: FunctionComponent<ModalContainerProps> = ({
  children,
  title,
  subtitle = '',
  actionButtonLabel = 'ACCEPT',
  to = '',
  blocking = false,
  warning = false,
  error = false,
  onAccept = function () {},
  onCancel = function () {},
  className = '',
  autofocusOnAccept = false,
  confirmationTimer,
}) => {
  return (
    <Fragment>
      {blocking && <div className={styles.bg} />}
      <div className={cx(className, styles.container, 'modal', {
        [styles.warning]: warning,
        [styles.error]: error
      })}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
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
              theme={getButtonTheme({ warning, error })}
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
