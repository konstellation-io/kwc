import React, { FunctionComponent, ReactElement } from 'react'

import cx from 'classnames'
import styles from './Left.module.scss'

type Props = {
  children: ReactElement | ReactElement[]
  className?: string
}

export const Left: FunctionComponent<Props> = ({ children, className }) => (
  <div className={cx(styles.container, className)}>{children}</div>
)
