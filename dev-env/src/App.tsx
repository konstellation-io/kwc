import 'kwc/dist/index.css';
import 'kwc/src/styles/app.global.scss';

import { ModalContainer, ModalLayoutJustify } from 'kwc';

import EmailIcon from '@material-ui/icons/Email';
import React from 'react';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <ModalContainer
          title="Aloha"
          subtitle="To be sure, type the word “DELETE” and will be deleted now."
          error
        >
          <ModalLayoutJustify
            onUpdate={() => {}}
            submit={() => {}}
            error=""
            label={'Please write "DELETE"'}

          />
        </ModalContainer>
      </header>
    </div>
  );
}

export default App;
