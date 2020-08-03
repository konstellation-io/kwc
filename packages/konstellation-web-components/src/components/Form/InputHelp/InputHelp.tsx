import React from 'react';
import cx from 'classnames';
import styles from './InputHelp.module.scss';

export type InputHelpProps = {
  message?: string;
};

export function InputHelp({ message = '' }: InputHelpProps) {
  return (
    <div
      className={cx(styles.helpMessage, { [styles.show]: message !== '' })}
      data-testid="help-message"
    >
      {message}
    </div>
  );
}
