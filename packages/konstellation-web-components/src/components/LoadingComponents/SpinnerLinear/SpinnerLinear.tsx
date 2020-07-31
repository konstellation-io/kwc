import { Lottie } from '../../Lottie/Lottie';
import React from 'react';
import animationData from './animation-data.json';
import cx from 'classnames';
import styles from './SpinnerLinear.module.scss';

export type SpinnerLinearProps = {
  size?: number;
  dark?: boolean;
};

export function SpinnerLinear({
  size = 125,
  dark = false,
}: SpinnerLinearProps = {}) {
  return (
    <div
      className={cx(styles.loaderContainer, {
        [styles.dark]: dark,
      })}
      style={{ width: size, height: size }}
      data-testid="spinner"
    >
      <Lottie
        options={{ animationData }}
        width={size}
        height={size}
        segments={[0, 100]}
        forceSegments
      />
    </div>
  );
}
