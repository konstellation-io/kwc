import React from 'react'
import cx from 'classnames'
import styles from './Colors.module.scss'

type ColorNames =
  | 'base'
  | 'error'
  | 'highlight'
  | 'lowlight'
  | 'success'
  | 'feedback'
  | 'alert'

type ColorProps = {
  color: ColorNames
  range: number
}
function Color({ color, range }: ColorProps) {
  return (
    <div className={cx(styles.color, styles[`${color}${range}`])}>
      <span>{range === 500 ? color : `${color}-${range}`}</span>
      <code />
    </div>
  )
}

type Props = {
  color: ColorNames
}
function Colors({ color }: Props) {
  const ranges = Array(9)
    .fill(0)
    .map((_, i) => i * 100 + 100)

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{color}</div>
      <div className={styles.container}>
        {ranges.map((range) => (
          <Color color={color} range={range} />
        ))}
      </div>
    </div>
  )
}

export default Colors
