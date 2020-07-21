import React from 'react'
import styles from './PropEnum.module.scss'

type Props = {
  of: any
}
function PropEnum({ of }: Props) {
  return (
    <div className={styles.container}>
      {of.map((enumEl) => (
        <div className={styles.propEnum}>
          <span className={styles.enum}>{enumEl.__filemeta.name}</span>
          <span className={styles.values}>
            {Object.keys(enumEl).join(' | ')}
          </span>
        </div>
      ))}
    </div>
  )
}

export default PropEnum
