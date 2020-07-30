import React from "react";
import styles from "./InfoMessage.module.scss";

export type InfoMessageProps = {
  message: string;
};
export function InfoMessage({ message }: InfoMessageProps) {
  return <div className={styles.container}>{message}</div>;
}
