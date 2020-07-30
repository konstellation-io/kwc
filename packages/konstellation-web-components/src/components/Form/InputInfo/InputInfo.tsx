import React from "react";
import cx from "classnames";
import styles from "./InputInfo.module.scss";

export type InputInfoProps = {
  message?: string;
};

export function InputInfo({ message = "" }: InputInfoProps) {
  return (
    <div className={cx(styles.infoMessage, { [styles.show]: message !== "" })}>
      {message && `(${message})`}
    </div>
  );
}
