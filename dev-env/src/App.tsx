import 'kwc/dist/index.css';
import 'kwc/src/styles/app.global.scss';

import { Button, MultiSelect, Select, ContextMenu, GroupSelect } from 'kwc';
import React, { useState } from 'react';

import styles from './App.module.scss';

function App() {
  const [p, setP] = useState<string>('Option Long A');

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <GroupSelect
          options={{
            groupA: ['Option A', 'Option B'],
            groupB: ['Option C'],
            groupC: ['Option D', 'Option E', 'Option F', 'Option G'],
          }}
          label="Some label"
          placeholder="Some placeholder"
        />
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
        <MultiSelect
          options={[
            { label: 'Group Number 1' },
            { label: 'g2' },
            { label: 'g3' },
            { label: 'Another' },
          ]}
          formSelectedOptions={['g2']}
        />
        <ContextMenu
          actions={[
            {text: 'Option 1', callToAction: () => {
              console.log('AAH!');
              alert('Option 1');
            }},
            {text: 'Option 2'}
          ]}
        >
          <div>Some text</div>
        </ContextMenu>
      </header>
    </div>
  );
}

export default App;
