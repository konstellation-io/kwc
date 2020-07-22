import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import styles from './IconRow.module.scss'

type Props = {
  name: string
  Icon?: any
  path?: string
  description: string
}
function IconRow({ name, Icon, path, description }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
      <div className={styles.icon}>
        {Icon ? (
          <Icon />
        ) : (
          <SvgIcon className='icon-small'>
            <path d={path} />
          </SvgIcon>
        )}
      </div>
      <span className={styles.description}>{description}</span>
    </div>
  )
}

export default IconRow
