import React from 'react'
import cx from 'classnames'
import styles from './FontColor.module.scss'

type ColorNames =
  | 'light'
  | 'highlight'
  | 'lowlight'
  | 'regular'
  | 'grey'
  | 'dark'
  | 'disabled'

type Props = {
  color: ColorNames
}
function FontColor({ color }: Props) {
  return (
    <div className={cx(styles.fontColor, styles[color])}>
      <span>{color}</span>
      <code />
    </div>
  )
}

export default FontColor
