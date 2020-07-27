import React, { FunctionComponent, ReactElement } from 'react'

import cx from 'classnames'
import styles from './Right.module.scss'

type Props = {
  children: ReactElement | (ReactElement | false)[]
  className?: string
}

export const Right: FunctionComponent<Props> = ({ children, className }) => (
  <div className={cx(styles.container, className)}>{children}</div>
)
