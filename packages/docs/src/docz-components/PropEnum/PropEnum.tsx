import React from 'react';
import styles from './PropEnum.module.scss';

type EnumEl = {
  name: string;
  value: any;
};

// TODO: Check if var name can be extracted when project is built

type Props = {
  of: EnumEl[];
};
function PropEnum({ of }: Props) {
  return (
    <div className={styles.container}>
      {of.map((enumEl) => (
        <div className={styles.propEnum} key={enumEl.name}>
          <span className={styles.enum}>{enumEl.name}</span>
          <span className={styles.values}>
            {Object.keys(enumEl.value).join(' | ')}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PropEnum;
