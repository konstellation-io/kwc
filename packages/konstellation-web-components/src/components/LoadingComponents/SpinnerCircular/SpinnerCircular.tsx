import { Lottie } from "../../Lottie/Lottie";
import React from "react";
import animationData from "./animation-data.json";
import styles from "./SpinnerCircular.module.scss";

export type SpinnerCircularProps = {
  size?: number;
};

export function SpinnerCircular({ size = 125 }: SpinnerCircularProps = {}) {
  return (
    <div
      className={styles.loaderContainer}
      style={{ width: size, height: size }}
      data-testid="spinner"
    >
      <Lottie
        options={{ animationData }}
        width={size}
        height={size}
        segments={[0, 210]}
        forceSegments
      />
    </div>
  );
}
