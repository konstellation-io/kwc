import React from "react";
import cx from "classnames";
import styles from "./InputError.module.scss";

export type InputErrorProps = {
  message?: string;
};

export function InputError({ message = "" }: InputErrorProps) {
  return (
    <div className={cx(styles.errorMessage, { [styles.show]: message !== "" })}>
      {message}
    </div>
  );
}
