import 'kwc/dist/index.css';
import 'kwc/src/styles/app.global.scss';

import { Button, CHECK, TextInput, Select } from 'kwc';
import React, { useEffect, useState } from 'react';

import EmailIcon from '@material-ui/icons/Email';
import styles from './App.module.scss';

function App() {
  const [p, setP] = useState<string>('Option Long A');

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <Button label="SOMETHING" loading primary />
        <Select
          options={['Option Long A', 'Op B', 'Opcion C']}
          valuesMapper={{
            ['Option Long A']: 'OPTION LONG A',
            ['Op B']: 'OP B',
            ['Opcion C']: 'OPCION C',
          }}
          height={30}
          hideError
          formSelectedOption={p}
          onChange={(opt: any) => {
            setTimeout(() => {
              setP(opt);
            }, 2000)
          }}
        />
      </header>
    </div>
  );
}

export default App;
