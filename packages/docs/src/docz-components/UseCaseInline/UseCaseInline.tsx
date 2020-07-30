import React from "react";
import styles from "./UseCaseInline.module.scss";

// TODO: extract code from component

type Props = {
  title: string;
  Component: JSX.Element;
  code: JSX.Element;
  description?: string;
};
function UseCaseInline({ title, Component, code, description }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.compoment}>{Component}</div>
        {code}
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}

export default UseCaseInline;
