import React, { FunctionComponent, ReactElement } from "react";

import styles from "./VerticalBar.module.scss";

export type VerticalBarProps = {
  children: ReactElement | ReactElement[];
};

export const VerticalBar: FunctionComponent<VerticalBarProps> = ({
  children,
}) => <div className={styles.container}>{children}</div>;
