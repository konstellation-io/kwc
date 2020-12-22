import 'kwc/dist/index.css';
import 'kwc/src/styles/app.global.scss';

import { ModalContainer, ModalLayoutJustify, SearchSelect, SearchSelectTheme } from 'kwc';
import React, { useState } from 'react';

import EmailIcon from '@material-ui/icons/Email';
import styles from './App.module.scss';

function App() {
  const [p, setP] = useState<string[]>([]);

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <SearchSelect
          options={['mariano.gonzalez@intelygenz.com', 'mariano.gonzalez@intelygenz.com', 'mmm.gonzalez@intelygenz.com', 'richard.gonzalez@intelygenz.com', 'pedro.gonzalez@intelygenz.com', 'lucas.gonzalez@intelygenz.com', 'mario.gonzalez@intelygenz.com', 'marcos.gonzalez@intelygenz.com']}
          chipSelection={p}
          placeholder="Find a new member..."
          onChange={(value:string) => value && setP([...p, value])}
          onRemoveChip={(chip: string) => setP(p.slice(-1))}
          theme={ SearchSelectTheme.LIGHT }
          showSearchIcon
          showClear
        />
      </header>
    </div>
  );
}

export default App;
