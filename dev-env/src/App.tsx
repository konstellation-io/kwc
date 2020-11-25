import 'kwc/dist/index.css';
import 'kwc/dist/styles/app.global.scss';

import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { TextInput } from 'kwc';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <TextInput
          label="Some label"
          Icon={ CloseIcon }
          placeholder="bla bla bla"
        />
      </header>
    </div>
  );
}

export default App;
