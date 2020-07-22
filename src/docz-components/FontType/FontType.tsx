import React from 'react'
import cx from 'classnames'
import styles from './FontType.module.scss'

type FontTypes =
  | 'mega'
  | 'jumbo'
  | 'display'
  | 'headline'
  | 'title'
  | 'subheader'
  | 'body'
  | 'caption'
  | 'small'
  | 'button'
  | 'tabnav'
  | 'code'

type Props = {
  type: FontTypes
  description: string
}
function FontType({ type, description }: Props) {
  return (
    <div className={cx(styles.container, styles[type])}>
      <span className={styles.type}>{type}</span>
      <span className={styles.description}>{description}</span>
    </div>
  )
}

export default FontType
