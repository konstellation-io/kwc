import 'kwc/dist/index.css';
import 'kwc/src/styles/app.global.scss';

import { Button, CHECK, TextInput } from 'kwc';
import React, { useEffect, useState } from 'react';

import EmailIcon from '@material-ui/icons/Email';
import styles from './App.module.scss';

function App() {
  const [p, setP] = useState<boolean>(false);


  useEffect(() => {
    setTimeout(() => {
      setP(true);
    }, 2000)
  }, [])

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <Button
          label="SOMETHING"
          loading
          primary
        />
        <TextInput label="some" formValue="asdadasa" hidden />
      </header>
    </div>
  );
}

export default App;
