import React, { FunctionComponent, ReactElement } from 'react'

import cx from 'classnames'
import styles from './HorizontalBar.module.scss'

type Props = {
  children: ReactElement | ReactElement[]
  className?: string
}

export const HorizontalBar: FunctionComponent<Props> = ({
  children,
  className
}) => <div className={cx(className, styles.container)}>{children}</div>
