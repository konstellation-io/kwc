import React from 'react';
import cx from 'classnames';
import styles from './InputLabel.module.scss';

export type InputLabelProps = {
  text?: string;
  hidden?: boolean;
};

export function InputLabel({ text = '', hidden = false }: InputLabelProps) {
  return (
    <label
      className={cx(styles.label, { [styles.hidden]: hidden })}
      data-testid="label"
    >
      {text.toUpperCase()}
    </label>
  );
}
