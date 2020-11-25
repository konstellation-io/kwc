import 'kwc/dist/index.css';
import 'kwc/src/styles/app.global.scss';

import { ExpandableTextInput, Select, SelectTheme } from 'kwc';

import EmailIcon from '@material-ui/icons/Email';
import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <ExpandableTextInput
        />
      </header>
    </div>
  );
}

export default App;
