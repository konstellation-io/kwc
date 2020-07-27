import React from 'react'
import cx from 'classnames'
import styles from './InputError.module.scss'

type Props = {
  message?: string
}

export function InputError({ message = '' }: Props) {
  return (
    <div className={cx(styles.errorMessage, { [styles.show]: message !== '' })}>
      {message}
    </div>
  )
}
