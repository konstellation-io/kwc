import React, { FC } from "react";
import styles from "./Warning.module.scss";

type Props = {
  children: string;
};
const Warning: FC<Props> = ({ children }) => (
  <div className={styles.container}>
    <span>WARNING: </span>
    { children }
  </div>
);

export default Warning;
